'use strict'
const util = require('./service')

module.exports = function(app,express){
    
    const api = express.Router()
  
        api.get('/movies',function(req,res){
            const result = util.getMovies(function(err,response,data){
            //Parsing data to make it more readable in React
            const parsedData = JSON.parse(data)
            if(!err){
                res.send(parsedData)
            }
            })           
        })

        api.get('/music',function(req,res){
            const result = util.getMusic(function(err,response,data){
            //Parsing data to make it more readable in React
            const parsedData = JSON.parse(data)
            if(!err){
                res.send(parsedData)
            }
            })           
        })

    return api

}