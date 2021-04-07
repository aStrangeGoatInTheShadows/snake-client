const connect = require('./client');
const log = console.log;

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

let playerDirection = [
  'Move: up',
  'Move: left',
  'Move: down',
  'Move: right'
];

server = connect();
handleUserInput = setupInput();

handleUserInput.on('data', (playerMove) => {
  let direct = 0;
  clearInterval(keyPress);
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
    default: return null;
  }
  let keyPress = setInterval(() => { server.write(playerDirection[direc]) }, 100);
});

module.exports = {
  setupInput
}
// ///////////////////////////////////////// FROM DAVID M ////////////////////////////////////
// just paste a bit here:
// const setupInput = function(conn) {
//   connection = conn;
//   const stdin = process.stdin;
//   let keyPress;

//   const handleUserInput = function() {
//     stdin.on('data', (key) => {
//       clearInterval(keyPress);
//       if (key === '\u0003') {
//         process.exit();
//       } else if (INPUTS[key] !== undefined) {
//         keyPress = setInterval(() => connection.write(INPUTS[key]), 100);
