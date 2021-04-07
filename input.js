const connect = require('./client');
const config = require('./constants');
const log = console.log;
let server = connect();
let handleUserInput = process.stdin;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

// currentFunction is the snake roaming around the game 
let currentFunction;  // Credit @DavidM for adding logic insight
let direct = 0;

handleUserInput.on('data', (playerMove) => {

  clearInterval(currentFunction); // Credit @LukePenner for adding logic insight

  switch (playerMove) {
    case 'w': direc = 0;
      break;
    case 'a': direc = 1;
      break;
    case 's': direc = 2;
      break;
    case 'd': direc = 3;
      break;
    case '\u0003': log('Toodles!');
      process.exit();
    default: sendMessage(playerMove);
  }
  currentFunction = setInterval(() => { server.write(config.playerDirection[direc])}, 50);
});

const sendMessage = (msgToSend) => {
  server.write(`Say: ${config.messages[msgToSend]}`);
  return null;
}

module.exports = {
  setupInput
}
