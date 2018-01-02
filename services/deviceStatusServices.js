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
    }
}