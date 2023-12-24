var express = require('express');
var router = express.Router();
var Bober = require("../models/bober.js").Bober;
var async = require("async")
var checkAuth = require("./../middleware/checkAuth.js")

/* Страница героев */
router.get('/:nick',checkAuth, async function(req, res, next) {
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
}
    
module.exports = router;
