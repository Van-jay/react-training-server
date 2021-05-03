import firebase from 'firebase';
import dotenv from 'dotenv';
import { Balance } from '../models/firestore.models';

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

export const getAllDocumentsFromCollection = async (collection: any) => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc: any) => doc.data());
};

export const getBalancesFromBalanceCollection = async (
  balanceCollection: any
): Promise<Balance> => {
  const balancesRef = balanceCollection.doc('balances');
  const balances = await balancesRef.get();
  return balances.data();
};
