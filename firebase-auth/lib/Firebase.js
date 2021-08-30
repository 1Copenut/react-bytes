import Firebase from 'firebase/app';
import 'Firebase/auth';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// If an instance doesn't exist, create one
if (!Firebase.app.length) {
  Firebase.initializeApp(FirebaseCredentials);
}

export default Firebase;
