const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Setting up local API

const hostname = '127.0.0.1'
const port = 3000

// Setting up links to endpoints on Drupal API

const moviesApi = 'http://0.0.0.0:8080/api/movies'
const musicApi = 'http://0.0.0.0:8080/api/music'


app.get('/movies', function(req, res) {
  console.log('--> Call from React...')
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

app.listen(port, () => console.log(`-> Express listening on port ${port}!`))



