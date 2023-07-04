import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3cEMNanJFqy1lJCNOzGx5_S3iyvPEKHM",
  authDomain: "where-is-waldo-tomasz.firebaseapp.com",
  projectId: "where-is-waldo-tomasz",
  storageBucket: "where-is-waldo-tomasz.appspot.com",
  messagingSenderId: "59454626878",
  appId: "1:59454626878:web:dd4205fb0da48e772f456f",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)