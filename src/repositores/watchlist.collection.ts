import firestore, { getAllDocumentsFromCollection } from './firestore';

export const watchlistCollection = firestore.collection('watchlist');

export const getWatchlist = async () => {
  const watchlist = await getAllDocumentsFromCollection(watchlistCollection);
  return watchlist;
};
