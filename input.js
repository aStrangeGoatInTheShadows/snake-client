


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

handleUserInput.on('data', (playerMove)=>{
  console.log(playerMove);
});

module.exports = {
  setupInput
}