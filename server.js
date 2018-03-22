var express = require("express");
var app     = express();
var path    = require("path");

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('img'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/styleguide',function(req,res){
  res.sendFile(path.join(__dirname+'/styleguide.html'));
});

app.listen(3000);

console.log("Running at Port 3000");