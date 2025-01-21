// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : import.meta.env.VITE_apiKey,
  authDomain : import.meta.env.VITE_authDomain,
  projectId : import.meta.env.VITE_projectId,
  storageBucket : import.meta.env.VITE_storageBucket,
  messagingSenderId : import.meta.env.VITE_messagingSenderId,
  appId : import.meta.env.VITE_appId,
  measurementId : import.meta.env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// export default app;
