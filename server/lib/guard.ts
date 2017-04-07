import * as simple from 'jwt-simple';
import {isSession} from './auth';

export const guard = function guard (permissions: [string]) {
  return function expStack (req, res, next) {
    if (!req.cookies['access_token'] && isSession(req, res, next)) {
      return res.status(403);
    }

    let decoded = simple.decode(req.cookies['access_token'], process.env.JWT_SECRET);
    if (!decoded.permissions) {
      return res.status(403);
    }

    return permissions.every(
      (permission) => decoded.permissions.some((tokenPermission) => permission === tokenPermission))
      ? next() : res.status(403);
  };
};
