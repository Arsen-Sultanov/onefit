const sr = require('sync-request');
var bodyParser  = require('body-parser');
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', function(req, res) {
    console.log(req.url);
    console.log(req.url);
    let cities = JSON.parse(sr('GET', 'https://onefit.ru' + req.url).getBody('utf8'));
    res.send(cities);
});
app.post('*', function(req, res) {
    console.log(JSON.stringify(req.body));
    let cities = sr('POST', 'https://onefit.ru' + req.url, 
    {
        headers: {       
            'content-type': 'application/json'
          },
        body : JSON.stringify(req.body)
    }
    );
    res.header(JSON.stringify(cities.headers));
    res.status(cities.statusCode);
    let data = JSON.parse(cities.body.toString('utf8'));
    console.log(data);
    res.send(JSON.stringify(data));
  
});




app.listen(3001, ()=>console.log('ok'));
