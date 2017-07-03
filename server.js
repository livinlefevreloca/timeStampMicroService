// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/?", function(req, res){
  var str = req.query;
  if(isTime(str)){
    if(str.length > 10){
      
    }
  }
  
});

//check whether a string is a unix timestamp of a natural langauge date
function isTime(str){
  var dateRegex = /\S+\s\d{2}\s\d{4/g;
  if((!isNaN(str) && str.length === 10) || dateRegex.test(str)){
    return str;
  }
  else{return false}
  
}

function naturaltoUnix(str){
  var arr = str.split(" ");
  
}


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
