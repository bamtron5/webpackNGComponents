import * as express from 'express';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import {User} from '../models/User';
import * as moment from 'moment';
let router = express.Router();

router.post('/auth/register', function(req, res, next) {
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.save(function(err, user) {
    // this is a validation error so 400 bad req
    if (err) return next({message: 'user did not save', error: err});
    if (user) return res.json({message: 'Registration complete.'});
  });
});

router.post('/auth/login', function(req, res, next) {
  if (!req.body.username && !req.body.password) {
    return res.json({message: 'Please fill out every field'});
  }

  passport.authenticate('local', {session: false}, function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(401).json({message: 'failed login'});
    if (user) {
      req.logIn(user, (err) => {
        if (err) return next({message: 'login failed', error: err, status: 500});
        if (user) {
          let token = user.generateJWT();
          return res.json({token, user});
        } else {
          res.json({message: 'please try again.'}).status(500);
        }
      });
    }
  })(req, res, next);
});

router.get('/auth/logout', (req, res, next) => {
  req.logout();
  req.user = null;
  return res.json({isAuthenticated: req.isAuthenticated()});
});

export = router;
