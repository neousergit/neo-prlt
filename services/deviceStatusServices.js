module.exports = function(deviceStatusDAO){
    return {
        save: function(deviceStatus, callback){
            deviceStatusDAO.save(deviceStatus, function(err, saved){
                if(err){return callback(err)}
                return callback(null, saved);
            });
        },
        getByUid: function(uid, callback){
            deviceStatusDAO.getByUid(uid, function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
        list: function(callback){
            deviceStatusDAO.list(function(err, list){
                if(err){return callback(err)}
                return callback(null, list);
            });
        },
    }
}