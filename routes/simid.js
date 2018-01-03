var express = require('express');
var router = express.Router();

var DeviceStatusDatastoreDAO = require("../dao/deviceStatusDatastoreDAO");
var DeviceStatusServices = require("../services/deviceStatusServices")(DeviceStatusDatastoreDAO);

var ParamsHelper = require("../helpers/paramsHelper");

router.get('/', function(req, res, next) {
  return res.send({ code: -2, data: null, message: "SIMID not informed"});
});

router.get('/:simid', function(req, res, next) {
  var simid = req.params.simid;
  if(!simid){
    return res.send({ code: -2, data: null, message: "SIMID not informed"});
  }
  var params = {};
  //ACCEPTED FORMAT FOR DATE YYYYMMDD
  //ACCEPTED FORMAT FOR TIME HHMM
  params = ParamsHelper.prepareParams(req.query.initialDate, req.query.finalDate, req.query.initialTime, req.query.finalTime);
  if(!params){
    return res.send({ code: -1, data: null, message: "Invalid parameters"});
  }
  DeviceStatusServices.getBySimd(simid, params, function(err, list){
    if(err){ res.send({code: -1, data: null, message: err}) }
    res.send({ code: 0, data: list, message: "Data Ok"});
  });
});

module.exports = router;
