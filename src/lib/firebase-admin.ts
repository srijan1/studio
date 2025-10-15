import admin from 'firebase-admin';

// Ensure the private key is properly formatted.
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && privateKey) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: privateKey,
        }),
      });
    } else {
      console.warn('Firebase admin environment variables are not fully set. Initialization skipped.');
    }
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

let firestore;
if (admin.apps.length) {
  firestore = admin.firestore();
} else {
  // Provide a no-op mock if initialization fails
  // This allows the app to build and run even if firebase-admin is not configured
  firestore = {
    collection: () => ({
      add: () => Promise.resolve({ id: 'mock-id' }),
    }),
  } as unknown as admin.firestore.Firestore;
  console.error("Firestore is not initialized. Using a mock implementation.");
}


export { firestore };
