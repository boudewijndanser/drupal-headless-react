'use strict'

const request = require('request') 
const config = require('../config')

const getMovies = function getMovies(cb){
    const url = config.basepath.concat('/').concat('movies')
    console.log('url from getMovies:', url)
    request(url, function (error, response, body) {
      cb(error,response,body) 
    });}

const serviceObject = {
  "getMovies": getMovies
}

module.exports = serviceObject