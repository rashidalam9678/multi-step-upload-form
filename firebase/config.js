import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaLtXHeQ5vdJatds6OG9ZPsGQ1HRK36vc",
  authDomain: "multi-step-form-uploader.firebaseapp.com",
  projectId: "multi-step-form-uploader",
  storageBucket: "multi-step-form-uploader.appspot.com",
  messagingSenderId: "904899255388",
  appId: "1:904899255388:web:b33feedce71b6340d09a99"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);
export {db,storage};
