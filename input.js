const stdin = process.stdin;
const stdout = process.stdout;
const exit = process.exit;
let connection;

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key, connection);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };