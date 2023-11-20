var express = require('express');
var router = express.Router();

/* Страница Простого Бобера */
router.get('/prbober', function(req, res, next) {
  res.send("<h1>Простой Бобер</h1>")
  });

/* Страница Военного Бобера */
router.get('/vbober', function(req, res, next) {
  res.send("<h1>Военный Бобер</h1>")
  });

/* Страница Орущий Бобер */
router.get('/obober', function(req, res, next) {
  res.send("<h1>Орущий Бобер</h1>")
  });

module.exports = router;
