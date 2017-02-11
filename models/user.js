const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  username: String,
  avatar: String,
  password: {
    type: String,
    select: false,
  },
  singupDate: {
    type: Date,
    default: Date.now(),
  },
  lastLoginDate: Date,
});

userSchema.pre('save', (next) => {
  const user = this;
  if (!user.isModified('password')) next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next();

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) next();
      user.password = hash;
      next();
    });
  });
});

userSchema.method.gravatar = function gravatar() {
  if (!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro';

  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}/?s=200&d=retro`;
};

module.exports = mongoose.model('User', userSchema);
