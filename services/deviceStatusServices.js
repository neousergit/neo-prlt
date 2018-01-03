var GeneralServices = require("./generalServices");

var PATH_FIRMWARE = "./app_data/firmware/";

module.exports = function(deviceStatusDAO){
    return {
        save: function(deviceStatus, callback){
            deviceStatusDAO.save(deviceStatus, function(err, idSaved, entity){
                if(err){return callback(err)}
                return callback(null, idSaved, entity);
            });
        },
        getByUid: function(uid, params, callback){
            deviceStatusDAO.getByUid(uid, params, function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        getBySimd: function(simid, params, callback){
            deviceStatusDAO.getBySimid(simid, params, function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        list: function(params, callback){
            deviceStatusDAO.list(params, function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        lookForFirmwareUpdate: function(entity, callback){
            var deviceTypes = deviceStatusDAO.getDeviceTypes();
            if(deviceTypes[entity.deviceType]){
                GeneralServices.readFile(PATH_FIRMWARE + deviceTypes[entity.deviceType] + ".json", function(err, data){
                    if(err){ return callback(err) }
                    callback(null, data);
                });
            } else {
                callback(null, null);
            }
        },
    }
}