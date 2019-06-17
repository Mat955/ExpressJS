var express = require('express');
var app = express();

app.use('/store', function (req, res, next) {
    console.log('I am an intermediary when requesting / store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('This is shop');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!');
});


















// var express = require('express');
// var app = express();

// app.listen(3000);

// app.get('/', function (req, res) {
//     res.send('The ID that was appended to it ' + req.params.id);
// });

// app.get('/list_user', function (req, res) {
//     console.log('I received a GET request to the /list_user page');
//     res.send('Web with list of users!');
// })

// app.get('/ab*cd', function (req, res) {
//     console.log('I received a GET request to the /ab*cd page');
//     res.send('The pattern fits')
// })

// app.post('/', function (req, res) {
//     console.log('I received a POST request to the home page');
//     res.send('Hello POST');
// });

// app.delete('/del_user', function (req, res) {
//     console.log('I received a DELETE request to the /del_user');
//     res.send('Hello DELETE!');
// });