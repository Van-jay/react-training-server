export const getAllDocumentsFromCollection = async (collection: any) => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc: any) => doc.data());
};

export const getBalancesFromBalanceCollection = async (
  balanceCollection: any
) => {
  const balancesRef = balanceCollection.doc('balances');
  const balances = await balancesRef.get();
  return balances.data();
};
