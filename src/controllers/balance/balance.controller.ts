const startingBalanceMock = 123;

const getStartingBalance = (req: any, res: any) => {
  res.send({ startingBalance: startingBalanceMock });
};

const editStartingBalance = (req: any, res: any) => {
  console.log(req);
  res.send(startingBalanceMock);
};

export default { getStartingBalance, editStartingBalance };
