var express = require('express');
var router = express.Router();

const keygenerator = require('keygenerator');
const { UpdateUserInfo, setUserInfo } = require('../firebase/firebaseconnect');
const getUser = require('../firebase/firebaseconnect').getUserInfo
const getCollection = require('../firebase/firebaseconnect').getCollectionInfo
const set = require('../firebase/firebaseconnect').setUserInfo
const Util = require("../Utility/Util")
var GetUserWithSessionID = Util.GetUserWithSessionID



/* GET home page. */
router.get('/', async function(req, res, next) {
  await GetUserWithSessionID(req.cookies.SessionID).then(function(User){
    if (User == false) {res.redirect('/login'); return}
    res.render('index', { title: 'College Interview', State: 'Logout', User});
  })
});

router.get('/login', (req,res) => {
  res.render('login', {State: 'Login'})
})

router.get('/signup', (req,res) => {
  res.render('signup',{State: 'Login'})
})

router.get('/logout', (req,res) => {
  res.clearCookie("SessionID")
  res.redirect('/')
})

router.post('/logindetails', (req,res) => {

  getCollection("Users").then(function(users){

    var userexists = false
    var SessionID = keygenerator._()
    users.forEach(element => {
      if (element["Uname"] == req.body.Uname && element["Pass"] == req.body.Pass) {
        userexists = true
        element
        element["SessionID"]= SessionID
        UpdateUserInfo('Users',element)
      }
    });
    
    if (userexists) {
      res.cookie("SessionID",SessionID)
      res.render('success',{User: req.body.Uname, action: "logged in",State: 'Logout'})
    } else {
      res.render('login', {failed: "Username/Password is incorrect",State: 'Login'})
    }
})
})

router.post('/signupdetails', (req,res) => {
  getCollection("Users").then(function(users){

    
    console.log(users)
    var userexists = false
    users.forEach(element => {
      if (element["Uname"] == req.body.Uname) {
        userexists = true
      }
    });

    if (userexists) {
      res.render('signup', {failed: "User already exists!",State: 'Login'})
    } else {

      setUserInfo('Users', {
        Pass: req.body.Pass,
        Uname: req.body.Uname,
        SessionID: ""
      })
      res.render('success',{User: req.body.Uname, action: "signed up",State: 'Login'})
    }
})
})

module.exports = router;
