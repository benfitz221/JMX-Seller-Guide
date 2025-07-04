import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  query,
  where,
  getDoc
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'stakeholders';

// Create a new stakeholder
export const createStakeholder = async (userId, stakeholderData) => {
  try {
    // CRITICAL: Remove any id field completely - Firebase will generate the document ID
    const { id, ...dataWithoutId } = stakeholderData;
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...dataWithoutId,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
      // NOTE: No 'id' field stored in document data!
    });
    
    console.log('Created stakeholder with Firebase document ID:', docRef.id);
    return { id: docRef.id, ...dataWithoutId };
  } catch (error) {
    console.error('Error creating stakeholder:', error);
    throw error;
  }
};

// Get all stakeholders for a user
export const getStakeholders = async (userId) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Use Firebase document ID, ignore any internal 'id' field
      return {
        id: doc.id, // This is the actual Firebase document ID
        ...data
      };
    });
  } catch (error) {
    console.error('Error getting stakeholders:', error);
    throw error;
  }
};

// Update stakeholder using Firebase document ID
export const updateStakeholder = async (stakeholderId, updates) => {
  try {
    console.log('Attempting to update stakeholder with Firebase document ID:', stakeholderId);
    
    // Validate stakeholder ID format
    if (!stakeholderId || typeof stakeholderId !== 'string') {
      throw new Error('Invalid stakeholder ID provided');
    }
    
    // Check if document exists before updating
    const stakeholderRef = doc(db, COLLECTION_NAME, stakeholderId);
    const docSnap = await getDoc(stakeholderRef);
    
    if (!docSnap.exists()) {
      console.error('Document does not exist with ID:', stakeholderId);
      throw new Error(`Stakeholder with ID ${stakeholderId} does not exist`);
    }
    
    // CRITICAL: Remove 'id', 'userId', 'createdAt' from updates
    // Do NOT store an 'id' field in the document data
    const { id, userId, createdAt, ...updateData } = updates;
    
    await updateDoc(stakeholderRef, {
      ...updateData,
      updatedAt: new Date()
      // NOTE: No 'id' field stored in document data!
    });
    
    console.log('Successfully updated stakeholder with Firebase document ID:', stakeholderId);
    return { id: stakeholderId, ...updateData };
  } catch (error) {
    console.error('Error updating stakeholder:', error);
    console.error('Failed Firebase document ID:', stakeholderId);
    throw error;
  }
};

// Delete stakeholder
export const deleteStakeholder = async (stakeholderId) => {
  try {
    console.log('Attempting to delete stakeholder with Firebase document ID:', stakeholderId);
    
    // Validate stakeholder ID
    if (!stakeholderId || typeof stakeholderId !== 'string') {
      throw new Error('Invalid stakeholder ID provided');
    }
    
    // Check if document exists before deleting
    const stakeholderRef = doc(db, COLLECTION_NAME, stakeholderId);
    const docSnap = await getDoc(stakeholderRef);
    
    if (!docSnap.exists()) {
      console.error('Document does not exist with ID:', stakeholderId);
      throw new Error(`Stakeholder with ID ${stakeholderId} does not exist`);
    }
    
    await deleteDoc(stakeholderRef);
    console.log('Successfully deleted stakeholder with Firebase document ID:', stakeholderId);
    return stakeholderId;
  } catch (error) {
    console.error('Error deleting stakeholder:', error);
    throw error;
  }
};

// Real-time listener for stakeholders
export const subscribeToStakeholders = (userId, callback) => {
  const q = query(
    collection(db, COLLECTION_NAME),
    where('userId', '==', userId)
  );
  
  return onSnapshot(q, (snapshot) => {
    const stakeholders = snapshot.docs.map(doc => {
      const data = doc.data();
      // Always use Firebase document ID, never any internal 'id' field
      const stakeholder = {
        id: doc.id, // This is the actual Firebase document ID
        ...data
      };
      console.log('Document from Firebase - ID:', doc.id, 'Data has internal id?', 'id' in data);
      return stakeholder;
    });
    callback(stakeholders);
  }, (error) => {
    console.error('Error in stakeholders subscription:', error);
  });
};