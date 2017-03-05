export const sanitizeQ = function sanitize (expected: string[]) {
  return function (req, res, next) {
    expected.forEach((v) => req[v] ? req.sanitizeQuery(v).escape().trim('') : null);
    next();
  };
};
