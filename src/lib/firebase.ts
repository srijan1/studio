import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function logUpiTransaction(data: {
  upiId: string;           // Your org's UPI ID
  amount: number;
  name?: string;
  donorName?: string;     // Donor's UPI ID
  status: 'initiated' | 'success' | 'failed'; // Transaction status
  timestamp?: number;
}) {
  await addDoc(collection(db, 'upi_transactions'), {
    ...data,
    timestamp: data.timestamp || Date.now(),
  });
}
