var express = require('express');
var router = express.Router();
var Bober = require("../models/bober").Bober
var async = require("async")

/* Страница героев */
router.get('/:nick', async function(req, res, next) {
  try {
    const [bober, bobers] = await Promise.all([
      Bober.findOne({ nick: req.params.nick }),
      Bober.find({}, { _id: 0, title: 1, nick: 1 })
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
  console.log(bobers);

  res.render('bober', {
    title: title,
    picture: picture,
    desc: desc,
    menu: bobers
  });
}
    
module.exports = router;
