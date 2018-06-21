'use strict'
var util = require('./service');

module.exports = function(app,express){
    
    var api = express.Router();
  
        api.get('/movies',function(req,res){
            var result = util.getMovies(function(err,response,data){
            if(!err){
                res.send(data);   
            }
            });           
        });

    return api;

}