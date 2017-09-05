var express = require('express');
var app = express();
var pug = require('pug');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', {title: 'Test'});
})

// parameter
app.get('/user/:userID', (req, res) => {
    var userID = req.params.userID;
    console.log(userID);
    res.render('user', {
        userName: 'Para',
        userID: userID
    });
});

// query
app.get('/user', (req, res) => {
    var userID = req.query.userID;
    console.log("UID: " + userID);
    res.render('user', {
        userName: 'Que',
        userID: userID
    });
});

app.listen(3000);