'use strict'

var request = require('request'); 
var config = require('../config');

var getMovies = function getMovies(cb){
    var url = config.basepath.concat('/').concat('movies');
    console.log('url from getMovies:', url)
    request(url, function (error, response, body) {
      cb(error,response,body); 
    });}

var serviceObject = {
  "getMovies": getMovies
}

module.exports = serviceObject