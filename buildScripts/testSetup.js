// This file is not transpiled, so must use CommonJS

// Register babel to transpile before out tests run
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
