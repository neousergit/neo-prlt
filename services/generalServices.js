var fs = require("fs");

module.exports = {
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