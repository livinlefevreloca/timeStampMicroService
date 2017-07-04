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

app.get(/\d{1,11}/, function(req, res){
  console.log("work");
  var resObj = {};
  var str = req.query;
  var unix = naturalToUnix(str);
  resObj["natural"] = str;
  resObj["unix"] = unix;
    });
        
app.get(/\S+\s\d{2}\s\d{4}/,function(req,res){
  var resObj = {};
  var str = req.query;
  var nat = unixToNatural(str);
  resObj["natural"] = nat
  resObj["unix"] = str;  
  res.send(resObj);
    });

//translate natural langauge date to unix
function naturalToUnix(str){
  var date = new Date(str);
  return date.getTime()/1000;
  
}
//translate unix date to natural language
function unixToNatural(str){
  var date =  new Date(str);
  return date.toString().split(" ").slice(1,4).join(" ");
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
