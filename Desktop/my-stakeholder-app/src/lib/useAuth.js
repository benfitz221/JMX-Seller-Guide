import { useState, useEffect, useCallback } from 'react';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { AuthService } from './authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // Sign in anonymously if no user
        signInAnonymously(auth)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            console.error('Error signing in anonymously:', error);
            setAuthError('Failed to initialize anonymous session');
          });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const signInWithEmail = useCallback(async (email, password) => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      const result = await AuthService.signInWithEmail(email, password);
      if (!result.success) {
        setAuthError(result.error);
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // Create account (upgrades anonymous to email or creates new)
  const createAccount = useCallback(async (email, password, name) => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      // Use the new unified method to preserve any existing anonymous data
      const result = await AuthService.createPermanentAccount(email, password, name);
      if (!result.success) {
        setAuthError(result.error);
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // Legacy method aliases for backward compatibility
  const signUpWithEmail = useCallback(async (email, password, name) => {
    return createAccount(email, password, name);
  }, [createAccount]);

  const upgradeAccount = useCallback(async (email, password, name) => {
    return createAccount(email, password, name);
  }, [createAccount]);

  // Send password reset email
  const sendPasswordReset = useCallback(async (email) => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      const result = await AuthService.sendPasswordReset(email);
      if (!result.success) {
        setAuthError(result.error);
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // Sign out
  const signOut = useCallback(async () => {
    setAuthLoading(true);
    setAuthError(null);
    
    try {
      const result = await AuthService.signOutUser();
      if (!result.success) {
        setAuthError(result.error);
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // Clear auth error
  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  // Get user info
  const getUserInfo = useCallback(() => {
    return AuthService.getUserInfo();
  }, []);

  // Check if user is anonymous
  const isAnonymous = user ? user.isAnonymous : false;
  
  // Check if user has email
  const hasEmailAuth = user ? !user.isAnonymous && user.email : false;

  return {
    // User state
    user,
    loading,
    isAnonymous,
    hasEmailAuth,
    
    // Auth operations
    signInWithEmail,
    createAccount,        // Primary method for account creation
    signUpWithEmail,      // Legacy alias
    upgradeAccount,       // Legacy alias
    sendPasswordReset,
    signOut,
    
    // Auth state
    authLoading,
    authError,
    clearAuthError,
    
    // Utilities
    getUserInfo
  };
};