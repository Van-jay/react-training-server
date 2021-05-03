export enum FirestoreCollectionsType {
  watchlist = 'watchlist',
  balance = 'balance',
}

export interface Balances {
  startingBalance: number;
  currentBalance: number;
}
