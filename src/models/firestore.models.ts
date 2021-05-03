export enum FirestoreCollectionsType {
  watchlist = 'watchlist',
  balance = 'balance',
}

export interface Balance {
  startingBalance: number;
  currentBalance: number;
}
