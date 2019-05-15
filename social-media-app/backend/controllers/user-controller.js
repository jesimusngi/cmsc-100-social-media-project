'use strict';
const User = require('mongoose').model('User');
var ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcryptjs');

// signup
exports.signup = (req, res) => {
  const newUser = new User(req.body);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(user => console.log(err))
    });
  });

  console.log("save")
}

// login
exports.login = (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password
  
  User.findOne({ email }, (err, user) => {
    if ( !user || err ) {
      console.log('User does not exist!')
      return res.send("invalid")
    }

    user.comparePassword(password, user.password, function(err, isMatch) {

      if(isMatch) {
        console.log("Succesful login!")
        User.findOne( { "email": email }, (err, user) => {
          if(err) {
            console.log(err);
            return res.status(403).send("invalid")
          } else {
            console.log(user);
            return res.status(200).send(user)
          }
        })
      } else {
        console.log("Invalid username/password! Try again.")
        return res.send("invalid")
      }

    });

  })
}
