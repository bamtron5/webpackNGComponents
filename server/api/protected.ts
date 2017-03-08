import * as express from 'express';
import * as passport from 'passport';
let router = express.Router();

router.get('/protected',
  passport.authenticate('jwt', {}, (req, res, next) => {
    res.json({message: 'OMG SO SECRET'});
  }));

export = router;
