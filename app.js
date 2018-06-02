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


//7.Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//put static resources into folder,set static path
app.use(express.static(path.join(__dirname, 'public')));


//.5 set up route for "/" using get request.
app.get("/", function (req, res) {
    res.send('Hello You');
});


//4.we need to listen our app on port
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
