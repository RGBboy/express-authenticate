/**
 * Express Authenticate Unit Tests
 */

/**
 * Module dependencies.
 */

var should = require('should'),
    authenticate = require('../');

/**
 * Tests
 */

describe('Authenticate', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      authenticate.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

});