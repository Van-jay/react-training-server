import firebase from 'firebase';
import dotenv from 'dotenv';
import {
  getAllDocumentsFromCollection,
  getBalancesFromBalanceCollection,
} from '../utils/firestore.utils';

dotenv.config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});

const firestore = firebaseApp.firestore();

export default firestore;
