const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  email         : { type: String, default: '' },
  name          : { type: String, default: '' },
  password      : { type: String, default: '' },
  about         : { type: String, default: '' },
  birthday      : { type: String, default: '' }
});

module.exports = mongoose.model('User', UserSchema);