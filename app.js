var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
  var query = req.query.search;
  var apiKey = "&apikey=198d470a";
  var url = "http://omdbapi.com/?s=" + query + apiKey;

  request(url, function(error, response, body){
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("results", {data: data});
    };
  });
});

app.get("/", function(req, res){
  res.render("search");
});

app.listen(3000, function(){
  console.log("Movie app has started.");
});
