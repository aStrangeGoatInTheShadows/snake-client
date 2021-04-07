const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const client = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  client.setEncoding('utf8');

  client.on('connect', () => {
    console.log('Successfully connected to server.');

    // Naming our snek Mat
    client.write('Name: Mat');
  });

  client.on('data', (data) => {
    console.log('Message from server: ', data)
  });

  client.on('end', ()=>{
    console.log("You've been disconected from the server");
    process.exit();
  })

  return client;
}

module.exports = connect;