var express = require('express');
var router = express.Router();
var db = require('../mySQLconnect.js');
//var Bober = require('../models/bober.js').Bober;
//var async = require("async");
var checkAuth = require("./../middleware/checkAuth.js")


/* GET bobers listing. */
router.get('/', function (req, res, next) {
  res.send('<h1>Это экран для списка бобров</h1>');
});

router.get("/:nick", checkAuth, function (req, res, next) {
  db.query(`SELECT * FROM bobers WHERE bobers.nick = '${req.params.nick}'`, (err,
    bobers) => {
    if (err) {
      console.log(err);
      if (err) return next(err)
    } else {
      if (bobers.length == 0) return next(new Error("Нет такого бобра"))
      var bober = bobers[0];
      res.render('bober', {
        title: bober.title,
        picture: bober.avatar,
        desc: bober.about
      })
    }
  })
});
/* router.get('/:nick',checkAuth, async function(req, res, next) {
  try {
      const [bober, bobers] = await Promise.all([
        Bober.findOne({ nick: req.params.nick })
      ]);
    
      if (!bober) {
        throw new Error("Нет такого");
      }
      
      renderBober(res, bober.title, bober.avatar, bober.desc, bobers);
    } catch (err) {
      next(err);
    }
  });
  
  function renderBober(res, title, picture, desc, bobers) {
    res.render('bober', {
      title: title,
      picture: picture,
      desc: desc,
      menu: bobers
    });
  } */

module.exports = router;
