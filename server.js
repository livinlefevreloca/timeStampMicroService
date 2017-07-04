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

app.get(/\d, function(req, res){
  console.log("work");
  var resObj = {};
  var str = req.query;
  if(isTime(str)){
    if(str.length > 10){
      var unix = naturalToUnix(str);
      resObj["natural"] = str;
      resObj["unix"] = unix;
    }
    else{
      var nat = unixToNatural(str);
      resObj["natural"] = nat
      resObj["unix"] = str;     
    }
  }
  else{
    resObj["natural"] = null;
      resObj["unix"] = null;
  }
  res.send(resObj);
  
});

//check whether a string is a unix timestamp of a natural langauge date
function isTime(str){
  var dateRegex = /\S+\s\d{2}\s\d{4/g;
  if((!isNaN(str) && str.length === 10) || dateRegex.test(str)){
    return str;
  }
  else{return false}
  
}

function naturalToUnix(str){
  var date = new Date(str);
  return date.getTime()/1000;
  
}

function unixToNatural(str){
  var date = new Date(str);
  date.toString()
}

function naturalToUnix(str){
  var date =  new Date(str);
  return date.toString().split(" ").slice(1,4).join(" ");
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
