// firebaseConfig.js
import { getApps, initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxJVEgizqObbKYY0f6Q0_Aa0k3kKvpzfM",
  authDomain: "graduate-7d8b9.firebaseapp.com",
  projectId: "graduate-7d8b9",
  storageBucket: "graduate-7d8b9.appspot.com",
  messagingSenderId: "778217842102",
  appId: "1:778217842102:web:95318f85b876a1b9a44d17",
  measurementId: "G-DGW8JDNHRD"
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export { auth };
