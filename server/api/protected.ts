import * as express from 'express';
import isLoggedIn from '../lib/isLoggedIn';
let router = express.Router();

router.get('/protected', isLoggedIn, (req, res, next) => {
  res.json({message: 'OMG SO SECRET'});
});

export = router;
