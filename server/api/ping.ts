import * as express from 'express';
import * as passport from 'passport';
import {logHeaders} from '../lib/dev';
let router = express.Router();

router.get('/ping', logHeaders, passport.authenticate('jwt', { session: false }), (req, res, next) => {
  return res.json({message: 'pong'});
});

export = router;
