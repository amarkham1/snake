const net = require('net');
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
}();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    exit();
  }
};

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AJM");
    // conn.write("Move: up");
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = { connect };