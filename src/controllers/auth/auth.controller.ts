const authorise = (req: any, res: any) => {
  console.log(req.body);
  res.send('fakeToken');
};

export default { authorise };
