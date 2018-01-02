var Datastore = require('@google-cloud/datastore');
var configDatastore = require("../config/dataStore");

var datastore = new Datastore({
  projectId: configDatastore.id_project,
  keyFilename: configDatastore.path_file
});

var KIND_DEVICE_STATUS = "DeviceStatus";

module.exports = {
    save: function(deviceStatus, callback){
        
        const deviceStatusKey = datastore.key(KIND_DEVICE_STATUS);
        const entity = {
            key: deviceStatusKey,
            data: deviceStatus
        };
        entity.data.timestamp = new Date();
        if(deviceStatus.prelogin.simid){
            entity.data.simid = deviceStatus.prelogin.simid;
        }
        
        datastore.save(entity).then(() => {
            console.log(`deviceStatus ${deviceStatusKey.id} created successfully.`);
            callback(null, deviceStatusKey.id, entity);
        }).catch((err) => {
            console.error('ERROR:', err);
            callback(err);
        });
    },
    getByUid: function(uid, callback){
        const queryByUid = datastore.createQuery(KIND_DEVICE_STATUS)
            .filter('uid', '=', uid);
        datastore.runQuery(queryByUid).then((results) => {
            const list = results[0];
            callback(null, list);
        }).catch((err) => {
            console.error('ERROR:', err);
            callback(err);
        });
    },
    list: function(callback){
        const queryByUid = datastore.createQuery(KIND_DEVICE_STATUS);
        datastore.runQuery(queryByUid).then((results) => {
            const list = results[0];
            callback(null, list);
        }).catch((err) => {
            console.error('ERROR:', err);
            callback(err);
        });
    },//TODO MAYBE READ FROM A DATABASE
    getDeviceTypes: function(){
        return {
            SA2100: "SA2100",
        }
    }
};