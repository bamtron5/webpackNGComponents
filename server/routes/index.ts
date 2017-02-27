import * as express from 'express';
import * as passport from 'passport';
// let helper = require('sendgrid').mail;
let router = express.Router();

router.get('/login/twitter',
  passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { session: true, failureRedirect: '/', successRedirect: '/'}));

export default router;
