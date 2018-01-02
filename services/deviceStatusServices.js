var GeneralServices = require("./generalServices");

module.exports = function(deviceStatusDAO){
    return {
        save: function(deviceStatus, callback){
            deviceStatusDAO.save(deviceStatus, function(err, idSaved, entity){
                if(err){return callback(err)}
                return callback(null, idSaved, entity);
            });
        },
        getByUid: function(uid, callback){
            deviceStatusDAO.getByUid(uid, function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        list: function(params, callback){
            deviceStatusDAO.list(function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        lookForFirmwareUpdate: function(entity, callback){
            var deviceTypes = deviceStatusDAO.getDeviceTypes();
            if(deviceTypes[entity.deviceType]){
                GeneralServices.readFile("/app_data/firmware/" + deviceTypes[entity.deviceType] + ".json", function(err, data){
                    if(err){console.log(err);return callback(err)}
                    console.log(data);
                    callback(null, data);
                });
            } else {
                callback(null, null);
            }
        },
    }
}