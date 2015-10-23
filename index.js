var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});

var COMMENTS = [
    {
        "author": "Pete Hunt",
        "text": "Hey there!"
    },
    {
        "author": "Paul O’Shannessy",
        "text": "React is *great*!"
    }
];

app.get('/api/comments', function (req, res) {
    res.json(COMMENTS);
});

app.post('/api/comments', function (req, res) {
    console.log('WTF', req.body);
    COMMENTS.push(req.body ? req.body : {author: 'no data', text: 'no data was received'});
    res.json(COMMENTS);
});

app.use('/static', express.static('static'));

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
