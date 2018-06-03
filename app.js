//console.log('Hello world');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //we use to simplify path
var expressValidator = require('express-validator');
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


//set errors as a global variable
app.use(function (req, res, next) {
    res.locals.errors = null;
    next();
});
//Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.lenght) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));




var users = [{
        id: 1,
        first_name: 'Jeff',
        last_name: 'Doe',
        email: 'Jeffdoe@gmail.com',
},
    {
        id: 2,
        first_name: 'Bill',
        last_name: 'Doee',
        email: 'Billdoee@gmail.com',
},
    {
        id: 3,
        first_name: 'Tom',
        last_name: 'Doek',
        email: 'Tomdoek@gmail.com',
    },
    {
        id: 4,
        first_name: 'Bill',
        last_name: 'Doueg',
        email: 'Billdoueg@gmail.com',
},

];
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
    //we can parse values into the index view

    res.render('index', {
        title: 'Customers :',
        users: users
    });
});
app.post('/users/add', function (req, res) {

    req.checkBody('first_name',
        'First name is required').notEmpty();
    req.checkBody('last_name',
        'Last name is required').notEmpty();
    req.checkBody('email',
        'Email is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        //console.log('ERRORS');
        res.render('index', {
            title: 'Customers :',
            users: users,
            errors: errors,
        });
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email

        }
        console.log('SUCCESS')
    }
});
//4.we need to listen our app on port
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
