import * as express from 'express';
import * as passport from 'passport';
import {User} from '../models/User';
// let helper = require('sendgrid').mail;
let router = express.Router();

router.get('/login/twitter',
  passport.authenticate('twitter', {session: true}));

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { session: true, failureRedirect: '/'}),
  (req, res, next) => {
    User.findOne({_id: req.user['_id']})
      .then((u) => {
        let token = u.generateJWT();
        return res.redirect(`/?token=${token}`);
      }).catch((e) => {
        console.log(e); // no error please redirect
        res.redirect('/');
      });
  });

router.get('/login/twitter',
  passport.authenticate('soundcloud', {session: true}));

router.get('/auth/soundcloud',
  passport.authenticate('soundcloud-token'));

router.get('/auth/soundcloud/callback',
  passport.authenticate('soundcloud-token', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('sure');
    // Successful authentication, redirect home.
    res.redirect('/');
  });

export default router;
