import { Api } from '#lib/Api';
import { canConnectWebSocket } from '#lib/permissions';
import { Permission, type WebSocketRPC } from '@uah/server';
import { randomUUID } from 'node:crypto';

interface Payload {
  channel: string;
}

export class MyWebsocket extends Api implements WebSocketRPC {
  @Permission(canConnectWebSocket)
  async onOpen(payload: Payload) {
    this.sendMessageToSocket('AAAA');
    this.subscribeToChannel(payload.channel);

    setInterval(testPublishToChannel, 3000, payload.channel);

    return {
      uid: 'myUserId',
      sid: randomUUID(),
    };
  }

  async onClose() {
    //
  }
}

// Client
// let ws = new WebSocket('ws://localhost:3000/api/lang/examples/entities/websocket/channel');
// ws.onmessage = event => { console.log('onMessage', JSON.parse(event.data)) };
// ws.onclose = event => { console.log('onClose', {code: event.code, reason: event.reason })) };

function testPublishToChannel(name: string) {
  MyWebsocket.sendMessageToChannel(name, `Test publish to channel ${name}`);
}
