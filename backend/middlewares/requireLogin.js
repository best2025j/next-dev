const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const secret_key = process.env.SECRET_KEY

// This a middleware that verifies the token
// And ensures user is logged in to gain access to some endpoints
const requireLogin = async (req, res, next) => {
    try {
      const decode = jwt.verify(
        req.headers.authorization,
        secret_key
      );
      req.user = decode;
      next();
    } catch (error) {
      if (error.message == "jwt expired") {
        console.log("Token has expired. Login required.");
        res.status(302).redirect('/api/users/login');
      } else {
        console.log(error.message);
      }
    }
  };
  
module.exports = requireLogin;