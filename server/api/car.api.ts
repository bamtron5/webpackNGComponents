/// <reference types="express-validator" />

import * as express from 'express';
import * as passport from 'passport';
import {logHeaders} from '../lib/dev';
import {isSession, hasRole} from '../lib/auth';
import {Car} from '../models/Car';
import {sanitizeQ} from '../lib/sanitize';
let router = express.Router();
import {guard} from '../lib/guard';

// My Expected qs for cars
let exqCars = [
  'condition',
  'max',
  'min'
];

router.get('/car',
  isSession,                    // checks jwt to session username
  hasRole('admin'),             // checks role
  passport.authenticate('jwt'), // check for existent jwt and it's validity
  guard(['car:read']),          // checks permission
  sanitizeQ(exqCars),           // strips query strings ... best use on POST, PUT, PATCH
  (req, res, next) => {
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
