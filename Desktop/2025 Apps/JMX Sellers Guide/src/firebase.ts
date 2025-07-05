import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrhbxA-ak97ffgVuiP_dJG-9mHCg7gyDE",
  authDomain: "jmx-seller-guide.firebaseapp.com",
  projectId: "jmx-seller-guide",
  storageBucket: "jmx-seller-guide.firebasestorage.app",
  messagingSenderId: "28126879311",
  appId: "1:28126879311:web:5f264e59b492530e1a143a"
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