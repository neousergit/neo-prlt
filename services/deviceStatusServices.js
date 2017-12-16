
module.exports = function(deviceStatusDAO){
    return {
        save: function(deviceStatus, callback){
            deviceStatusDAO.save(deviceStatus, function(err, saved){
                if(err){return callback(err)}
                return callback(null, saved);
            });
        },
    }
}