const express = require('express');
const router = express.Router();
const Bober = require('../models/bober.js').Bober;
var User = require("../models/User").User

/* GET home page. */

router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});
  
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
  if(err) return next(err)
  if(user){
  if(user.checkPassword(password)){
  req.session.user = user._id
  res.redirect('/')
  } else {
  res.render('logreg', {title: 'Вход'})
  }
  } else {
  var user = new User({username:username,password:password})
  user.save(function(err,user){
  if(err) return next(err)
  req.session.user = user._id
  res.redirect('/')
})
}
})
});
  
module.exports = router;