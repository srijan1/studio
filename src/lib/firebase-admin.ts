import admin from 'firebase-admin';

// Ensure the private key is properly formatted.
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

if (!admin.apps.length) {
  if (projectId && clientEmail && privateKey) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: projectId,
          clientEmail: clientEmail,
          privateKey: privateKey,
        }),
      });
      console.log('Firebase Admin initialized successfully.');
    } catch (error: any) {
      console.error('Firebase Admin initialization error:', error.message);
      // Throw an error to prevent the app from using a mocked firestore instance
      throw new Error('Firebase Admin SDK failed to initialize.');
    }
  } else {
    // This will now be a hard failure during development if keys are missing
    throw new Error('Missing Firebase Admin SDK credentials. Please check your environment variables.');
  }
}

// This will now only be reached if initializeApp() was successful.
const firestore = admin.firestore();

export { firestore };
