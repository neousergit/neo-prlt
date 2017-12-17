var net = require('net');

var client = new net.Socket();
client.connect(13366, '43.117.197.104', function() {
	console.log('Connected');
	var d = "{\"uid\":\"013704000393126\",\"deviceType\":\"SA2100\",\"crinterval\":15,\"ip\":\"30.104.102.182\",\"prelogin\":{\"carrier\":\"T-Mobile\",\"connType\":\"Lte\",\"activeApn\":\"broadband\",\"imei\":\"013704000393126\",\"ipAddress\":\"30.104.102.182\",\"macAddress\":\"00:15:ff:61:9b:20\",\"latitude\":\"30.4483\",\"longitude\":\"-97.7056\",\"direction\":\"78.0469\",\"satellites\":12,\"rssi\":\"-125\",\"rsrp\":\"-99\",\"snr\":\"-18\",\"Ec/Io\":\"-31\",\"simid\":\"8901260875771550689\",\"ptn\":\"\",\"batteryPercent\":0,\"batteryCharging\":\"false\",\"bytesReceived\":41047,\"bytesSent\":66816,\"modemVer\":\"9x15GAB-1.23.8.16  1  [2014-01-10 13:30:33]\",\"linuxVer\":\"1.178.7\",\"xrdsApp\":\"0.0.38\"}}";
	client.write(d);
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});