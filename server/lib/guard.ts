import * as simple from 'jwt-simple';

export const guard = function guard (permissions: [string]) {
  return function expStack (req, res, next) {
    if (!req.headers['authorization']) {
      return res.status(403);
    }

    let token = req.headers['authorization'];
    let decoded = simple.decode(token.substring(4), process.env.JWT_SECRET);

    if (!decoded.permissions) {
      return res.status(403);
    }

    return permissions.every(
      (permission) => decoded.permissions.some((tokenPermission) => permission === tokenPermission))
      ? next() : res.status(403);
  };
};
