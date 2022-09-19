
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOpU69qK2YuYTOR2YJPwI-lBrszxtzVE4",
  authDomain: "hate-7b026.firebaseapp.com",
  projectId: "hate-7b026",
  storageBucket: "hate-7b026.appspot.com",
  messagingSenderId: "136842446600",
  appId: "1:136842446600:web:8fa29e011bc02074204ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
    db
}