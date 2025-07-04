import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  linkWithCredential,
  EmailAuthProvider,
  updateProfile,
  signOut
} from 'firebase/auth';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  writeBatch, 
  doc, 
  deleteDoc 
} from 'firebase/firestore';
import { auth, db } from './firebase';

/**
 * Authentication service for handling email/password auth and account upgrades
 */
export class AuthService {
  
  /**
   * Sign in with email and password
   */
  static async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return {
        success: true,
        user: userCredential.user,
        message: 'Successfully signed in'
      };
    } catch (error) {
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Create permanent account to save data across all devices
   * Works for both new users and anonymous users
   */
  static async createPermanentAccount(email, password, displayName = '') {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update display name if provided
      if (displayName.trim()) {
        await updateProfile(userCredential.user, {
          displayName: displayName.trim()
        });
      }

      return {
        success: true,
        user: userCredential.user,
        message: 'Account created! Your data is now saved permanently across all devices.'
      };
    } catch (error) {
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Legacy method - redirects to createPermanentAccount
   * @deprecated Use createPermanentAccount instead
   */
  static async upgradeAnonymousAccount(email, password, displayName = '') {
    return this.createPermanentAccount(email, password, displayName);
  }

  /**
   * Internal method: Link anonymous account to email/password account
   * This preserves all existing data by linking the accounts
   */
  static async _linkAnonymousAccount(email, password, displayName = '') {
    try {
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        throw new Error('No user is currently signed in');
      }

      if (!currentUser.isAnonymous) {
        throw new Error('Current user is not anonymous');
      }

      // Create email credential
      const credential = EmailAuthProvider.credential(email, password);
      
      // Link the anonymous account with email credential
      const userCredential = await linkWithCredential(currentUser, credential);
      
      // Update display name if provided
      if (displayName.trim()) {
        await updateProfile(userCredential.user, {
          displayName: displayName.trim()
        });
      }

      // Note: Firebase automatically transfers data since we're linking accounts
      // No need to manually migrate stakeholders - they'll still be associated with the same UID
      
      return {
        success: true,
        user: userCredential.user,
        message: 'Account created! Your data is now saved permanently across all devices.',
        preservedData: true
      };
    } catch (error) {
      // If linking fails, we need to handle data migration manually
      if (error.code === 'auth/email-already-in-use') {
        return await this.handleEmailInUseCreation(email, password, displayName);
      }
      
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Handle case where email is already in use during account creation
   * This requires manual data migration to existing account
   */
  static async handleEmailInUseCreation(email, password, displayName = '') {
    try {
      const currentUser = auth.currentUser;
      const anonymousUserId = currentUser?.uid;
      
      if (!anonymousUserId) {
        throw new Error('No anonymous user found');
      }

      // Sign in to the existing email account
      const signInResult = await this.signInWithEmail(email, password);
      
      if (!signInResult.success) {
        return {
          success: false,
          error: 'Failed to sign in to existing account. Please check your password.',
          code: 'auth/sign-in-failed'
        };
      }

      // Migrate data from anonymous account to email account
      const migrationResult = await this.migrateAnonymousData(anonymousUserId, signInResult.user.uid);
      
      if (!migrationResult.success) {
        return {
          success: false,
          error: 'Account sign-in successful, but data migration failed. Please contact support.',
          code: 'migration/failed'
        };
      }

      return {
      success: true,
      user: signInResult.user,
      message: `Welcome back! Your session data has been saved to your existing account.`,
      preservedData: true,
      dataMigrated: true
      };
    } catch (error) {
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Migrate stakeholder data from anonymous account to email account
   */
  static async migrateAnonymousData(fromUserId, toUserId) {
    try {
      const batch = writeBatch(db);
      
      // Get all stakeholders from anonymous account
      const stakeholdersQuery = query(
        collection(db, 'stakeholders'),
        where('userId', '==', fromUserId)
      );
      
      const stakeholdersSnapshot = await getDocs(stakeholdersQuery);
      
      if (stakeholdersSnapshot.empty) {
        return {
          success: true,
          message: 'No data to migrate',
          migratedCount: 0
        };
      }

      // Update each stakeholder to point to the new user ID
      stakeholdersSnapshot.docs.forEach((stakeholderDoc) => {
        const stakeholderRef = doc(db, 'stakeholders', stakeholderDoc.id);
        batch.update(stakeholderRef, {
          userId: toUserId,
          migratedAt: new Date(),
          originalUserId: fromUserId
        });
      });

      // Commit the batch update
      await batch.commit();

      return {
        success: true,
        message: `Successfully migrated ${stakeholdersSnapshot.docs.length} stakeholders`,
        migratedCount: stakeholdersSnapshot.docs.length
      };
    } catch (error) {
      console.error('Data migration failed:', error);
      return {
        success: false,
        error: 'Failed to migrate data: ' + error.message
      };
    }
  }

  /**
   * Send password reset email
   */
  static async sendPasswordReset(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return {
        success: true,
        message: 'Password reset email sent. Please check your inbox.'
      };
    } catch (error) {
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Sign out current user
   */
  static async signOutUser() {
    try {
      await signOut(auth);
      return {
        success: true,
        message: 'Successfully signed out'
      };
    } catch (error) {
      return {
        success: false,
        error: this.getErrorMessage(error.code),
        code: error.code
      };
    }
  }

  /**
   * Check if current user is anonymous
   */
  static isAnonymousUser() {
    const currentUser = auth.currentUser;
    return currentUser ? currentUser.isAnonymous : false;
  }

  /**
   * Get user display information
   */
  static getUserInfo() {
    const currentUser = auth.currentUser;
    if (!currentUser) return null;

    return {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      isAnonymous: currentUser.isAnonymous,
      emailVerified: currentUser.emailVerified,
      photoURL: currentUser.photoURL
    };
  }

  /**
   * Clean up anonymous data (call this after successful migration)
   */
  static async cleanupAnonymousData(anonymousUserId) {
    try {
      // This is optional - you might want to keep the original data for audit purposes
      // For now, we'll just mark it as migrated rather than deleting
      
      const stakeholdersQuery = query(
        collection(db, 'stakeholders'),
        where('originalUserId', '==', anonymousUserId)
      );
      
      const snapshot = await getDocs(stakeholdersQuery);
      
      if (!snapshot.empty) {
        const batch = writeBatch(db);
        
        snapshot.docs.forEach((doc) => {
          const docRef = doc.ref;
          batch.update(docRef, {
            cleanedUp: true,
            cleanedUpAt: new Date()
          });
        });
        
        await batch.commit();
      }

      return {
        success: true,
        message: 'Anonymous data marked as migrated'
      };
    } catch (error) {
      console.error('Cleanup failed:', error);
      return {
        success: false,
        error: 'Cleanup failed: ' + error.message
      };
    }
  }

  /**
   * Convert Firebase error codes to user-friendly messages
   */
  static getErrorMessage(errorCode) {
    const errorMessages = {
      // Authentication errors
      'auth/user-not-found': 'No account found with this email address.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/operation-not-allowed': 'This operation is not allowed.',
      'auth/weak-password': 'Password is too weak. Please choose a stronger password.',
      'auth/invalid-credential': 'Invalid email or password.',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
      'auth/requires-recent-login': 'Please sign in again to complete this action.',
      
      // Custom errors
      'migration/failed': 'Data migration failed. Please contact support.',
      'auth/sign-in-failed': 'Sign in failed. Please check your credentials.',
      
      // Default
      'default': 'An unexpected error occurred. Please try again.'
    };

    return errorMessages[errorCode] || errorMessages['default'];
  }

  /**
   * Validate email format
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate password strength
   */
  static isValidPassword(password) {
    return password && password.length >= 6;
  }

  /**
   * Get account creation suggestions based on usage
   */
  static getAccountCreationSuggestion(stakeholderCount = 0) {
    if (stakeholderCount === 0) {
      return {
        show: false,
        title: '',
        message: '',
        urgency: 'low'
      };
    }

    if (stakeholderCount >= 5) {
      return {
        show: true,
        title: 'Save Your Work',
        message: `You've built a network of ${stakeholderCount} stakeholders! Create an account to access your data from any device, any browser.`,
        urgency: 'high'
      };
    }

    if (stakeholderCount >= 2) {
      return {
        show: true,
        title: 'Secure Your Progress',
        message: `You've started building your network. Create an account to save your data permanently across all devices.`,
        urgency: 'medium'
      };
    }

    return {
      show: true,
      title: 'Save Permanently',
      message: 'Create an account to access your stakeholder data from any device, any browser.',
      urgency: 'low'
    };
  }
}