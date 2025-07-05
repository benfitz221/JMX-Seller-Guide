import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Lead data interface
export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

// Function to save lead data to Firebase
export const saveLeadData = async (leadData: LeadData) => {
  try {
    console.log('Attempting to save lead data:', leadData);
    
    const docRef = await addDoc(collection(db, 'leads'), {
      id: Date.now(), // Simple ID generation
      firstName: leadData.firstName,
      lastName: leadData.lastName,
      email: leadData.email,
      phone: leadData.phone || null,
      timestamp: Timestamp.fromDate(new Date()),
      createdAt: new Date().toISOString()
    });
    
    console.log('Lead saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving lead data:', error);
    console.error('Error details:', error.message);
    throw error;
  }
};

export default app;
