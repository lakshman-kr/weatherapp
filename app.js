var express    = require('express');
var bodyParser = require('body-parser');
var weather    = require('openweather-apis');



var app = express();


app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:false}));


app.get('/',function(req,res){
    res.render('home',{temp:null});
});

app.post('/',function(req,res){
    weather.setCity(req.body.city);
    weather.setAPPID('668d1b8af0a1fcf259f1fdcc5c249a6a');
    weather.getAllWeather(function(err,temp){
        console.log(temp);
        res.render('home',{temp:temp});
    });
});

var port  = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('server running at '+port);
});

