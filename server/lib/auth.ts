import * as passport from 'passport';
import * as express from 'express';
import * as simple from 'jwt-simple';

// Compare jwt to session
// Must have session and header authorization
export const isSession = function isSession (req, res, next) {
  if (req.session.passport && req.cookies['access_token']) {
    let decoded = simple.decode(req.cookies['access_token'], process.env.JWT_SECRET);
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

export const setCookie = function setCookie (name: string, payload: string) {
  return function (req, res, next) {
    let sess = {
      maxAge: 24 * 60 * 60 * 1000 * 2, //  2 days
      secure: false,
      httpOnly: true
    };

    // set to secure in production
    if (process.env.NODE_ENV === 'production') {
      sess.secure = true;
    }

    res.cookie(name, payload, sess);
    return res.json({isAuth: req.isAuthenticated()});
  };
};
