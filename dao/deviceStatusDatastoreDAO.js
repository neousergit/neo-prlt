var Datastore = require('@google-cloud/datastore');
var configDatastore = require("../config/dataStore");

var datastore = new Datastore({
  projectId: configDatastore.id_project
});

var KIND_DEVICE_STATUS = "DeviceStatus";

module.exports = {
    save: function(deviceStatus, callback){
        
        const deviceStatusKey = datastore.key(KIND_DEVICE_STATUS);
        const entity = {
            key: deviceStatusKey,
            data: [
                {
                    name: 'created',
                    value: new Date().toJSON()
                },
                {
                    name: 'description',
                    value: 'description',
                    excludeFromIndexes: true
                },
                {
                    name: 'done',
                    value: false
                }
            ]
        };
        
        datastore.save(entity).then(() => {
            console.log(`deviceStatus ${deviceStatusKey.id} created successfully.`);
            callback(null, deviceStatusKey.id);
        }).catch((err) => {
            console.error('ERROR:', err);
            callback(err);
        });
    }
}