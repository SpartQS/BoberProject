var express = require('express');
var router = express.Router();
var Bober = require("../models/bober").Bober


/* GET home page. */

router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});

module.exports = router;