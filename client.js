const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const toServer = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  toServer.setEncoding('utf8');

  toServer.on('connect', () => {
    console.log('Successfully connected to server.');

    // Naming our snek Mat
    toServer.write('Name: MAT');
  });

  // Continuously move in a specific direction.
  //   for(let i = 0; i < 10; i++){
  //     setTimeout(()=>{toServer.write('Move: up');}, 50);
  //   }

  //   for(let i = 0; i < 30; i++){
  //     setTimeout(()=>{toServer.write('Move: right');}, 50);
  //   }

  toServer.on('data', (data) => {

    console.log('Message from server: ', data)
  });

  return toServer;
}

module.exports = connect;