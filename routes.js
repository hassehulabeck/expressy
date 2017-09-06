var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Test'});
})

// parameter
router.get('/user/:userID', (req, res) => {
    var userID = req.params.userID;
    console.log(userID);
    res.render('user', {
        userName: 'Per',
        userID: userID,
        title: 'Pers sida'
    });
});

// query
router.get('/user', (req, res) => {
    var userID = req.query.userID;
    console.log("UID: " + userID);
    res.render('user', {
        userName: 'Quintus',
        userID: userID
    });
});

module.exports = router;    