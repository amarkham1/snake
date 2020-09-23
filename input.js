const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SPEAK } = require('./constants');

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
  } else if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  } else if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } else if (key === SPEAK) {
    connection.write('Say: QQ Baby');
  }
};

module.exports = { setupInput };