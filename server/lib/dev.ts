export const logHeaders = (req, res, next) => {
  console.log(`Headers: `, req.headers);
  return next();
};
