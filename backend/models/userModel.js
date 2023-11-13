const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Firstname is required']
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  role: {
    type: String,
    enum: ['User', 'Instructor'],
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
