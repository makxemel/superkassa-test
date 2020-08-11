const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//
let btn = true;

const getButton = () => {
  return btn;
};

const switchButton = () => {
  btn = !btn;
};

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.join('btn');
  socket.emit('getStateOfButton', { btn: getButton() });
  socket.on('switchStateOfButton', () => {
    switchButton();
    io.to('btn').emit('getStateOfButton', { btn: getButton() });
  });
});
server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен!');
});
