var express = require('express');
var router = express.Router();
const getUser = require('../firebase/firebaseconnect').getUserInfo
const getCollection = require('../firebase/firebaseconnect').getCollectionInfo
const set = require('../firebase/firebaseconnect').setUserInfo
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Interview'});
});

router.get('/login', (req,res) => {
  res.render('login')
})

router.post('/logindetails', (req,res) => {
  console.log(req.body)
  res.render()
})

module.exports = router;
