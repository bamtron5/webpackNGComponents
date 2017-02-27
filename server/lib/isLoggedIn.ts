function isLoggedIn (req, res, next) {
  return req.user ? next() : res.json({message: 'YOU SHALL NOT PASS'});
}

export default isLoggedIn;
