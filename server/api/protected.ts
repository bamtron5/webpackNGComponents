import * as express from 'express';
import {isSession} from '../lib/auth';
import * as passport from 'passport';
let router = express.Router();

router.get('/protected',
  isSession,
  passport.authenticate('jwt', {}, (req, res, next) => {
    res.json({message: 'OMG SO SECRET'});
  }));

export = router;
