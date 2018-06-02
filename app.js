//console.log('Hello world');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //we use to simplify path

//initialize var app and set it to express function
var app = express();

//6.middleware functions have access to req and res object or so next
/*var logger = function (req, res, next) {
    console.log('logging....');
    next();
}
app.use(logger);*/

//11.view Engine
app.set('view engine', 'ejs');
//12.specify what folder we want to use
app.set('views', path.join(__dirname, 'views'));





//7.Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//8.put static resources into folder,set static path
app.use(express.static(path.join(__dirname, 'public')));


/*//9.to parse j.son
var people = [{
        name: 'Jeff',
        age: '20'
},
    {
        name: 'Bill',
        age: '30'
},
    {
        name: 'John',
        age: '40'
},
    {
        name: 'Sarah',
        age: '50'
}
             ];


//10.instead send can use json array object
app.get("/", function (req, res) {
    res.json(people);
});*/

/*//.5 set up route for "/" using get request.
app.get('/', function (req, res) {
    res.send('Hello');
});*/
app.get('/', function (req, res) {
    res.render('index');
});
//4.we need to listen our app on port
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
