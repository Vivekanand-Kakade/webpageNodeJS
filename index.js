var express= require('express');
var app= express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/home',function(req,res){
    res.render('../Home.html');
}).listen(8080);
