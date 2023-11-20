var express = require('express');
var router = express.Router();

/* Просто Бобер */
router.get('/pbober', function(req, res, next) {
  res.render('bober', {
  title: "Просто Бобер",
  picture: "images/prostobober.jpg",
  desc: "Обычный"
  });
  });
  
/* Военный Бобер */
router.get('/vbober', function(req, res, next) {
  res.render('bober', {
  title: "Военный Бобер",
  picture: "images/voenniibober.jpg",
  desc: "Боевой"
  });
  });

/* Орущий Бобер */
router.get('/obober', function(req, res, next) {
  res.render('bober', {
  title: "Орущий Бобер",
  picture: "images/orushiibober.jpg",
  desc: "Орущий"
  });
  });

module.exports = router;
