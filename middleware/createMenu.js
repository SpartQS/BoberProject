var db = require('../mySQLConnect.js');

module.exports = function(req, res, next) {
    res.locals.nav = [];
    db.query('SELECT title, nick FROM bobers', function(err, result) {
        if (err) throw err;
        res.locals.nav = result;
        next();
    });
};