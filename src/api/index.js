const express = require('express') 
const bodyParser =  require('body-parser') 

const config = require('./config')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const api = require('./routes/controller')(app,express)

app.use('/api', api)

app.listen(config.port,function(err){

  if(err){
    console.log("Something is broken...")
  }else{
    console.log("Express server listening closely on port "+ config.port)   
  }

})

