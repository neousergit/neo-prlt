var fs = require("fs");

module.exports = function(deviceStatusDAO){
    return {
        readFile: function(path, callback){
            fs = require('fs');
            fs.readFile(path, 'utf8', function (err,data) {
                if (err) {
                    return callback(err);
                }
                callback(null, data);
            });
        },
    }
}