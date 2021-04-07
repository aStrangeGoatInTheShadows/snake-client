


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

handleUserInput = setupInput();

const log = console.log;

handleUserInput.on('data', (playerMove)=>{
  switch (playerMove) {
    case 'w' : log ('You went up');
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