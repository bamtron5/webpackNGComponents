import * as passport from 'passport';
import * as express from 'express';
import * as simple from 'jwt-simple';

// Compare jwt to session
// Must have session and header authorization
export const isSession = function isSession (req, res, next) {
  if (req.session.passport && req.headers.authorization) {
    let decoded = simple.decode(req.headers.authorization.substring(4), process.env.JWT_SECRET);
    return req.session.passport.user['username'] === decoded.username
      ? next()
      : res.status(403).json({message: 'please login.'});
  } else {
    return res.status(403).json({message: 'please login.'});
  }
};

export const hasRole = function hasRole (role: string) {
  return function (req, res, next) {
    if (req.user) {
      let hasRole = req.user['roles'].some((v) => v === role);
      return hasRole ? next() : res.status(403).json({message: 'Unauthorized'});
    } else {
      res.status(403).json({message: 'Unauthorized'});
    }
  };
};
