export const sanitizeQ = function sanitize (expected: string[]) {
  return function (req, res, next) {
    expected.forEach((v) => req.sanitizeQuery(v).escape().trim(''));
    next();
  };
};
