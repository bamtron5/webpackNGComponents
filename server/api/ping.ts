import * as express from 'express';
import * as passport from 'passport';
import {logHeaders} from '../lib/dev';
import {isSession} from '../lib/auth';
import {User} from '../models/User';
let router = express.Router();

router.get('/ping',
  isSession,
  passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = {
      condition: {$in: req.query['condition']} || {$exists: true},
      $and: [{ price: {$lte: req.params['max'] || Infinity}}, {price: {$gte: req.params['min'] || 0}}]
    };
    return res.json(query);
  });

export = router;
