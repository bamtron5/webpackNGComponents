import * as express from 'express';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import {User} from '../models/User';
let router = express.Router();

router.get('/user/:name', function(req, res, next) {
  User.findOne(req.params.name).select('-passwordHash -salt')
    .exec((e, user) => {
      if (e) return next({message: 'Could not find user.', error: e});
      let u = user.hasOwnProperty('username') ? user : {};
      return res.json(u);
  });
});

export = router;
