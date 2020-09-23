const stdin = process.stdin;
const stdout = process.stdout;
const exit = process.exit;

const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    exit();
  }
};

module.exports = { setupInput };