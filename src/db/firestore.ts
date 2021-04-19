import firebase from 'firebase';
import dotenv from 'dotenv';
import {
  getAllDocumentsFromCollection,
  getBalancesFromBalanceCollection,
} from '../utils/db.utils';

dotenv.config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});

export const firestore = firebaseApp.firestore();

export const watchlistCollection = firebaseApp
  .firestore()
  .collection('watchlist');
export const balanceCollection = firebaseApp.firestore().collection('balance');

export const getWatchlist = async () => {
  const watchlist = await getAllDocumentsFromCollection(watchlistCollection);
  console.log(watchlist);
};

export const getBalances = async () => {
  const balances = await getBalancesFromBalanceCollection(balanceCollection);
  console.log(balances);

  // const cityRef = balanceCollection.doc('balances');
  // const doc = await cityRef.get();
  // if (!doc.exists) {
  //   console.log('No such document!');
  // } else {
  //   console.log('Document data:', doc.data());
  // }
};
