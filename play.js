const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const toServer = net.createConnection({ 
    host: 'localhost',
    port: 50541

  });
  // interpret incoming data as text
  toServer.setEncoding('utf8'); 

  toServer.on('data', (data) => {
    console.log('Message from server: ', data)
  });

  return toServer;
}

console.log('Connecting ...');
connect();