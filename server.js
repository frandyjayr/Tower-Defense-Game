var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require("path");
app.use(express.static('/js'));
app.listen(port);

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});