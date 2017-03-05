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
      : res.status(401).json({message: 'please login.'});
  } else {
    return res.status(401).json({message: 'please login.'});
  }
};
