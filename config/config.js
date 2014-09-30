// DB 
var low = require('lowdb');
low.mixin(require('underscore-db'));
var db = low('./config/cinematics.json');




module.exports.Db = db;
