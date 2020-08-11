import io from 'socket.io-client';

// package.json proxy connected to ENDPOINT
const socket = io('http://localhost:9999/');

export default socket;
