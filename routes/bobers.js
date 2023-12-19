var express = require('express');
var router = express.Router();
var Bober = require("../models/bober").Bober

/* Страница героев */
router.get("/:nick", async (req, res, next) => {
    try {
      const bober = await Bober.findOne({ nick: req.params.nick });
      console.log(bober);
      if (!bober) {
        throw new Error("Нет такого бобра");
      }
      res.render('bober', {
        title: bober.title,
        picture: bober.avatar,
        desc: bober.desc
      });
    } catch (err) {
      next(err);
    }
  });
  
    
module.exports = router;
