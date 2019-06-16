var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./firstTask.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./firstTask.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data + req.params.note;
        fs.writeFile('./firstTask.json', stringifyFile, function (err) {
            if (err) throw err;
            console.log('file updated');
            res.send(stringifyFile);
        });
    })
});

var server = app.listen(3000);




















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