var http = require('http'),
express = require('express'),
bodyParser = require('body-parser'),
fs = require('fs');

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: 'false', limit: '50mb'}));

app.use('/', express.static( __dirname + '/express_public'));

app.post('/compress', function(request, response) {
  var base64Data = request.body.avatar.replace(/^data:image\/jpeg;base64,/, "");
  fs.writeFile("out.jpeg", base64Data, 'base64', function(err) {
    console.log(err);
  });
  response.send('POST request to compress');
});

app.listen(8080);