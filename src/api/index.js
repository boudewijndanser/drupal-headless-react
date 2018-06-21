var express = require('express'); 
var bodyParser =  require('body-parser'); 

var config = require('./config');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var api = require('./routes/controller')(app,express);

app.use('/api', api);

app.listen(config.port,function(err){

  if(err){
    console.log("error");
  }else{
    console.log("server listening on port "+ config.port);   
  }

});

