//let url = 'mongodb://80.93.177.208:27017/ERIO';
let login = require('../config').dbLogin;
let pass = require('../config').dbPass;
let adress = require('../config').dbIp;
let url = 'mongodb://'+login+':'+pass+'@'+adress;
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let db = mongoose.connect(url, { reconnectTries: Number.MAX_VALUE}); //конектимсся к БД
let multer = require('multer');
let upload = multer({dest: '../src/buffer'});
let conn = mongoose.connection;
let fs = require('fs');
let Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
let gfs = Grid(conn.db);


module.exports.multer = multer;
module.exports.db = db;
module.exports.upload = upload;
module.exports.fs = fs;
module.exports.gfs = gfs;
module.exports.url = url;
