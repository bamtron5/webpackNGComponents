export const logHeaders = (req, res, next) => {
  console.log(`Headers: `, req.headers);
  return next();
};

export const cookieList = (req, res, next) => {
  console.log('-- session --');
  console.dir(req.session);
  console.log('-------------');
  console.log('-- cookies --');
  console.dir(req.cookies);
  console.log('-------------');
  console.log('-- signed cookies --');
  console.dir(req.signedCookies);
  console.log('-------------');
  return next();
};
