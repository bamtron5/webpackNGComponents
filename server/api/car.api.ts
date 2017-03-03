/// <reference types="express-validator" />

import * as express from 'express';
import * as passport from 'passport';
import {logHeaders} from '../lib/dev';
import {isAuthenticated, isSession} from '../lib/auth';
import {Car} from '../models/Car';
import {sanitizeQ} from '../lib/sanitize';
let router = express.Router();

// My Expected qs for cars
let exqCars = [
  'condition',
  'max',
  'min'
];

router.get('/cars',
  // isSession,
  // isAuthenticated,
  // logHeaders,
  // validate TODO
  // resign claim TODO
  sanitizeQ(exqCars),
  passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let conditioned = {
      condition: req.query['condition'] ? {$in: req.query['condition']} : {$exists: true},
      max: (req.query['max'] || Infinity),
      min: (req.query['min'] || 0)
    };

    let query = {
      condition: conditioned.condition,
      price: { $lte: conditioned.max, $gte: conditioned.min }
    };

    Car.find(query)
      .then((result) => res.json(result))
      .catch((err) => next({err}));
  });

export = router;
