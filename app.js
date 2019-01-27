var path = require('path');
var express = require('express');
var app = express();
let {PythonShell} = require('python-shell')
let pyshell = new PythonShell('./html/Python-Selenium/python-selnium.py')
var htmlPath = path.join(__dirname, 'html');

let options = {
  mode: 'text',
  pythonPath: 'C:/Users/Dot dot/AppData/Local/Programs/Python/Python36/python.exe',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './html/Python-Selenium/',
  args: []
};

app.use(express.static(htmlPath));

var server = app.listen(80, function () {
    var host = 'localhost';
    var port = server.address().port;
});

app.get('/getpython',function(req,res){
	PythonShell.run('python-selnium.py', options, function (err,results) {
	if (err) throw err;
	console.log(results);
	});
	res.redirect('/')
});

