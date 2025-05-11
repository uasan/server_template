import { canConnectWebSocket } from '#lib/permissions';
import { Server } from '#lib/Server';
import { Permission, type WebSocketRPC } from '@uah/server';

interface Payload {
  channel: string;
}

export class MyWebsocket extends Server implements WebSocketRPC {
  @Permission(canConnectWebSocket)
  async onOpen(payload: Payload) {
    this.subscribeToChannel(payload.channel);

    setInterval(testPublishToChannel, 3000, payload.channel);

    return {
      peerId: 'myPeerId',
      userId: 'myUserId',
    };
  }

  async onClose() {
    //
  }
}

// Client
// let ws = new WebSocket('ws://localhost:3000/api/lang/examples/entities/websocket/channel');
// ws.onmessage = console.log;
// ws.onclose = console.log;

function testPublishToChannel(name: string) {
  MyWebsocket.sendMessageToChannel(name, `Test publish to channel ${name}`);
}
