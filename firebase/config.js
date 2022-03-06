import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaLtXHeQ5vdJatds6OG9ZPsGQ1HRK36vc",
  authDomain: "multi-step-form-uploader.firebaseapp.com",
  projectId: "multi-step-form-uploader",
  storageBucket: "multi-step-form-uploader.appspot.com",
  messagingSenderId: "904899255388",
  appId: "1:904899255388:web:b33feedce71b6340d09a99"
};

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);
export {db,storage};
