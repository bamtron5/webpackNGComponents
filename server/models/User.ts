import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as validator from 'validator';

export interface ITwitter {
  token: string;
  name: string;
  email: string;
}

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  passwordHash: string;
  salt: string;
  twitterId: string;
  twitter: ITwitter;
  setPassword(password: string): boolean;
  validatePassword(password: string): boolean;
  generateJWT(): JsonWebKey;
  roles: [string];
}

let UserSchema = new mongoose.Schema({
  username: { type: String, unique: true},
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'invalid email']
  },
  passwordHash: {type: String, select: false},
  salt: {type: String, select: false},
  twitterId: String,
  twitter: {
    token: String,
    name: String,
    email: String
  },
  roles: {type: Array, default: ['user']}
});

UserSchema.method('setPassword', function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
});

UserSchema.method('validatePassword', function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return (hash === this.passwordHash);
});

UserSchema.method('generateJWT', function() {
  return jwt.sign({
    username: this.username
  }, process.env.JWT_SECRET, {expiresIn: '2 days'});
});

export const User = mongoose.model<IUser>('User', UserSchema);
