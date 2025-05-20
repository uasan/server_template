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
    this.sendMessageToSocket('Test sendMessageToSocket');
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

function testPublishToChannel(name: string) {
  MyWebsocket.sendMessageToChannel(name, `Test publish to channel ${name}`);
}
