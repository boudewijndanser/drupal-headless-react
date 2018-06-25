'use strict'
const request = require('request') 
const config = require('../config')

const getMovies = function getMovies(cb){
    const url = config.basepath.concat('/').concat('movies')
    request(url, function (error, response, body) {
      cb(error,response,body) 
    })}

const getMusic = function getMusic(cb){
  const url = config.basepath.concat('/').concat('music')
  request(url, function (error, response, body) {
    cb(error,response,body) 
  })}

const getMusicDetail = function getMusic(paramId,cb){
  const url = config.basepath.concat('/').concat('music/').concat(paramId)
  console.log('url: ', url)
  request(url, function (error, response, body) {
    cb(error,response,body) 
  })}
//promise later?
const serviceObject = {
  "getMovies": getMovies,
  "getMusic": getMusic,
  "getMusicDetail": getMusicDetail
}

module.exports = serviceObject