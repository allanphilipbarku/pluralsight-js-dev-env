// This file isn't transplied, so must use CommonJS or ES5
//register babel to run before test run
require('babel-register')();
//disable webpack feature that Mocha doesn't understand
require.extensions['.css'] = function (){};
