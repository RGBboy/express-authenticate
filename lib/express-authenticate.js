/*!
 * express-authenticate
 * Copyright(c) 2012 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
 * Module Dependencies
 */

// None yet

/**
 * Return a middleware function
 *
 * @param {Object} User, user model
 * @return {Function} middleware function
 * @api public
 */
exports = module.exports = function (User) {

  return function (req, res, next) {
    if (req.session && req.session.email) {
      User.findByEmail(req.session.email, function (err, user) {
        if (err) {
          return next(err);
        }
        if (user) {
          req.authenticatedUser = user;
          res.locals.authenticatedUser = user;
          next();
        } else {
          next();
        }
      });
    } else {
      next();
    };
  };

};

/**
 * Library version.
 */

exports.version = '0.0.1';