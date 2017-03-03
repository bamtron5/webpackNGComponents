import * as passport from 'passport';
import * as express from 'express';

export const isAuthenticated = function isLoggedIn (req, res, next) {
  console.log(`req.user`, req.user);
  console.log(`req.isAuthenticated()`, req.isAuthenticated());
  return req.isAuthenticated() ? next() : res.json({message: 'A: unauthenticated. please login'}).status(401);
};

export const isSession = function isSession (req, res, next) {
  console.log(`req.session`, req.session);
  return req.session ? next() : res.json({message: 'B: unauthenticated. please login.'}).status(401);
};
