var express = require('express');
var router = express.Router();
var Bober = require("../models/bober").Bober

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся c bobers');
});

/* Страница бобров */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });
    
/* Страница героев */
router.get("/:nick", async (req, res, next) => {
    try {
      const bober = await Bober.findOne({ nick: req.params.nick });
      console.log(bober);
      if (!bober) {
        throw new Error("Нет такого!");
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
