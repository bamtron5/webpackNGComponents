import * as express from 'express';
let router = express.Router();

router.get('/ping', (req, res, next) => {
  res.json({message:'pong'});
});

export = router;
