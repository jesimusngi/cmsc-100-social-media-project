const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  fname          : { type: String, default: '' },
  mname          : { type: String, default: '' },
  lname          : { type: String, default: '' },
  email         : { type: String, default: '' },
  password      : { type: String, default: '' },
  birthday      : { type: Date, default: '' },
  about         : { type: String, default: '' }
});

UserSchema.pre('save', function (next) {

  console.log("pre")

  let user = this;

  if (!user.isModified('password')) {
    console.log("before save")
    return next()
  };

  next();
});

UserSchema.methods.comparePassword = function(candidatePassword, hash, cb) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);