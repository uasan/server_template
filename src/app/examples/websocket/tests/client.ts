// node --watch build/app/examples/websocket/tests/client.js

const socket = new WebSocket('ws://localhost:3000/api/en/examples/websocket/json-rpc/channel');

socket.addEventListener('open', () => {
  console.log('onOpen');
});

socket.addEventListener('message', event => {
  console.log('onMessage:', JSON.parse(event.data));
});

socket.addEventListener('close', event => {
  console.log('onClose:', event.code, event.reason);
});

socket.addEventListener('error', error => {
  console.error('onError:', error);
});
