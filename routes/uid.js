var express = require('express');
var router = express.Router();

var DeviceStatusDatastoreDAO = require("../dao/deviceStatusDatastoreDAO");
var DeviceStatusServices = require("../services/deviceStatusServices")(DeviceStatusDatastoreDAO);

router.get('/:uid', function(req, res, next) {
  var uid = req.params.uid;
  DeviceStatusServices.getByUid(uid, function(err, list){
    if(err){ res.send({code: -1, data: null, message: err}) }
    console.log("/uid/"+uid, list.length);
    res.send({ code: 0, data: list, message: "Data Ok"});
  });
});

module.exports = router;
