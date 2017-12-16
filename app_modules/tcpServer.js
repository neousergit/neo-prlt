var net = require('net');
var configTcpServer = require("../config/tcpServer");
var server = net.createServer();
server.on('connection', handleConnection);
var DeviceStatusDatastoreDAO = require("../dao/deviceStatusDatastoreDAO");
var DeviceStatusServices = require("../services/deviceStatusServices")(DeviceStatusDatastoreDAO);

server.listen(configTcpServer.port, "0.0.0.0", function() {
  console.log('server listening to %j', server.address());
});
  

function handleConnection(conn) {
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);
  
  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);
  conn.setEncoding('utf8');
  
  function onConnData(d) {
    try{
      var obj = JSON.parse(d);
    } catch (err) {
      console.log("ERROR");
      return conn.write("ERROR");
    }
    DeviceStatusServices.save(obj, function(err){
      if(err) console.log("ERROR Trying to save Device Status")
    });
    conn.write("OK");
  }
  
  function onConnClose() {
    console.log('connection from %s closed', remoteAddress);
  }
  
  function onConnError(err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  }

}


module.exports = function(){
  return server;
}