import * as express from 'express';
import {isAuthenticated} from '../lib/auth';
let router = express.Router();

router.get('/protected', isAuthenticated, (req, res, next) => {
  res.json({message: 'OMG SO SECRET'});
});

export = router;
