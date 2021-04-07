const  connect = require('./client');
const log = console.log;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) { 
  conn();

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(conn);
  return stdin;
}

handleUserInput.on('data', (playerMove)=>{
  switch (playerMove) {
    case 'w' : conn.write('Move: up');
      break;
    case 'a' : log('You went left');
      break; 
    case 's' : log('You went down');
      break;
    case 'd' : log('You went right');
      break;
    case '\u0003' : log('Toodles!');
      process.exit();
  }
});

module.exports = {
  setupInput
}