const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'Username cannot be blank'
    },
    email: {
      type: String,
      required: 'Email cannot be blank'
    },
    password: {
      type: String,
      required: 'Password cannot be blank'
    }
    }
);

module.exports = mongoose.model('User', UserSchema);
