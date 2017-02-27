import * as express from 'express';
let router = express.Router();

router.get('/ping', (req, res, next) => {
  // next({message:'A fake error'});
  return res.json({message:'pong'});
});

export = router;
