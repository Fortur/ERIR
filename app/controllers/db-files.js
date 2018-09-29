let dbModel = require('../models/db-model');

exports.getFile = function (req, res) {
  let readstream = dbModel.gfs.createReadStream({filename: req.params.filename});
  readstream.on('error', function (err) {
    res.send('No image found with that title');
  });
  readstream.pipe(res);
};