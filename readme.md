# Express Authenticate

  User Session Authentication for your Express Application

  [![Build Status](https://secure.travis-ci.org/RGBboy/express-authenticate.png)](http://travis-ci.org/RGBboy/express-authenticate)

## Installation

  Works with Express 3.0.x

    npm install git://github.com/RGBboy/express-authenticate.git


## Usage

  Just`use` it after you have added session functionality to your application:

``` javascript
  var authenticate = require('express-authenticate'),
      express = require('express'),
      app = express();

  app.use(express.cookieParser('miyahamiyahimiyahemiyahoho'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));

  app.use(authenticate());
```

## Requires

### Middleware

  The following middleware should be used by the application before the 
  Authenticate Component:

  * express.cookieParser
  * express.session

### Other

  Express Authenticate requires a User Model to be passed in upon construction. 
  The User Model needs to implement the following:

#### User.findByEmail(email, function (err, user) {})

  The `.findByEmail` method takes an email string as an argument and a 
  callback. The callback should respond with an error or the user.

## Todo

  * Write process helpers for other components to use for integration tests.
  * Write example that uses SSL
  * Write tests

## License 

(The MIT License)

Copyright (c) 2012 RGBboy &lt;me@rgbboy.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
