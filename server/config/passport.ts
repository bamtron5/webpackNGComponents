import * as passport from 'passport';
import * as mongoose from 'mongoose';
import {User, IUser} from '../models/User';
import * as jwt from 'jsonwebtoken';
let LocalStrategy = require('passport-local').Strategy;
let TwitterStrategy = require('passport-twitter').Strategy;
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

let initialize = function intialize () {
  passport.serializeUser(function(user: IUser, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj: IUser, done) {
    User.findOne({_id: obj._id}, {_id: 0, username: 1, roles: 1}, (err, user) => {
      if (err) done(null, {});
      done(null, user);
    });
  });

  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: process.env.JWT_SECRET
  };

  // For API Claims
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));

  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWITTER_KEY,
      consumerSecret: process.env.TWITTER_SECRET,
      callbackURL: process.env.ROOT_URL + '/auth/twitter/callback',
      profileFields: ['id', 'displayName', 'photos'],
      session: true
    },
    function(token, tokenSecret, profile, cb) {
      User.findOne({ twitterId: profile.id }, function (err, user) {
        if (user) {
          return cb(err, user);
        } else {
          let u = new User();
          u.username = profile.displayName;
          u.twitterId = profile.id;
          u.twitter.name = profile.displayName;
          u.twitter.token = token;
          u.save((err) => {
            if (err) cb(err, null);
            return cb(null, u);
          });
        }
      });
    }
  ));

  passport.use(new LocalStrategy({session: true}, function(username: string, password: string, done) {
    User.findOne({ username }).select('+passwordHash +salt')
      .exec(function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        if (!user.validatePassword(password)) return done(null, false, { message: 'Password does not match.' });
        user.passwordHash = undefined;
        user.salt = undefined;
        return done(null, user);
      });
  }));
};

export default initialize;
