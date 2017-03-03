import * as bodyParser from 'body-parser';
import configPassport from './config/passport';
import * as cookieParser from 'cookie-parser';
import * as debug from 'debug';
import * as ejs from 'ejs';
import * as express from 'express';
let expressValidator = require('express-validator');
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
let MongoStore = require('connect-mongo')(session);
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
import routes from './routes';
import {User} from './models/User';

// routes
import * as ping from './api/ping';
import * as auth from './api/auth';
import * as protect from './api/protected';
import * as user from './api/user';
import * as car from './api/car.api';

// models
import {Car} from './models/Car';

// seeds
import {carSeed} from './models/car.seed';

// replacing deprecated promise
(<any> mongoose).Promise = global.Promise;

let app = express();
const isDev = app.get('env') === 'development' ? true : false;

// helmet (read the docs)
app.use(helmet());

// logging
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// static routing
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static('client'));

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongoose connected');
    configPassport();
    if (isDev) {
      Car.count('*')
        .then((count) => count === 0 ? Car.create(carSeed) : null)
        .catch((e) => console.log(e));

      User.findOne({username: 'admin'}, (err, user) => {
        if (err) return;
        if (user) return;
        if (!user)
          var admin = new User();
          admin.email = process.env.ADMIN_EMAIL;
          admin.username = process.env.ADMIN_USERNAME;
          admin.setPassword(process.env.ADMIN_PASSWORD);
          admin.roles = ['user', 'admin'];
          admin.save();
      });
    }
  }).catch((e) => {
    console.log(e);
  });

// serve cookies through the proxy
app.set('trust proxy', 1);

// parse cookies ability
app.use(cookieParser());

// config req.session
let sess = {
  maxAge: 172800000, //  2 days
  secure: false,
  httpOnly: true
};

// set to secure in production
if (!isDev) {
  sess.secure = true;
}

// use session config
app.use(
  session({
    cookie: sess,
    secret: process.env.SESSION_SECRET, // can support an array
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    unset: 'destroy',
    resave: false,
    saveUninitialized: false // if nothing has changed.. do not restore cookie
  })
);

// config bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(passport.initialize());
app.use(passport.session());

// a server route
app.use('/', routes);

// apis
app.use('/api', ping);
app.use('/api', protect);
app.use('/api', user);
app.use('/api', auth);
app.use('/api', car);

// THIS IS THE INTERCEPTION OF ALL OTHER REQ
// After server routes / static / api
// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    // return isDev ? res.render('dist') : res.render('dist');
    return res.render('index');
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (isDev) {
  app.use((err, res) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err['message'],
      error: err // STACK TRACE
    });
  });
}

// production error handler
app.use((err, res) => {
  res.status(err['status'] || 500);
});

export = app;
