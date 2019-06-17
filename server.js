var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);
});
var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example application listen at address http://' + host + ':' + port);
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