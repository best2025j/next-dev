const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');
const key = process.env.SECRET_KEY;

const generateToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      secret_key,
      { expiresIn: '3h' },
      (err, token) => {
        if (err) reject(err);
        else {
          user.token = token;
          user.save().then(() => resolve(token)).catch(reject);
        }
      }
    );
    })
}

module.exports = generateToken;