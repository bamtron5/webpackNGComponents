import * as passport from 'passport';
import * as mongoose from 'mongoose';
let LocalStrategy = require('passport-local').Strategy;
let TwitterStrategy = require('passport-twitter').Strategy;
import {User, IUser} from '../models/User';
import * as jwt from 'jsonwebtoken';
passport.serializeUser(function(user:IUser, done) {
  done(null, user);
});

passport.deserializeUser(function(obj:IUser, done) {
  User.findOne({_id: obj._id}, {passwordHash: 0, salt: 0}, (err, user) => {
    if (err) done(null, {});
    done(null, user);
  });
});

passport.use(new TwitterStrategy({
    clientID: process.env.TWITTER_APP_ID,
    clientSecret: process.env.TWITTER_APP_SECRET,
    callbackURL: process.env.ROOT_URL + "/auth/twitter/callback",
    profileFields: ['id', 'displayName', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ twitterId: profile.id }, function (err, user) {
      if (user) {
        return done(err, user);
      } else {
        let u = new User();
        u.username = profile.displayName;
        u.twitterId = profile.id;
        u.twitter.name = profile.displayName;
        u.twitter.token = accessToken;
        u.save((err) => {
          if (err) done(err, null);
          return done(null, u);
        });
      }
    });
  }
));

passport.use(new LocalStrategy(function(username: string, password: string, done) {
  User.findOne({ username: username }).select('+passwordHash +salt')
    .exec(function(err, user) {
      if(err) return done(err);
      if(!user) return done(null, false, { message: 'Incorrect username.' });
      if(!user.validatePassword(password)) return done(null, false, { message: 'Password does not match.' });
      user.passwordHash = undefined;
      user.salt = undefined;
      return done(null, user);
    });
}));
