import { helloWorld } from '#app/examples/entities/actions/methods.ts';
import { Api } from '#lib/context/Api';
import { useWebSocket } from '#lib/security/permissions';
import { Permission, type WebSocketRPC } from '@uah/server';
import { randomUUID } from 'node:crypto';

interface Payload {
  channel: string;
}

export class MyWebsocket extends Api implements WebSocketRPC {
  methods = { helloWorld };

  @Permission(useWebSocket)
  async onOpen(payload: Payload) {
    this.subscribeToChannel(payload.channel);
    this.sendMessageToSocket('Test sendMessageToSocket');
    setTimeout(testPublishToChannel, 1000, payload.channel);

    return randomUUID();
  }

  async onClose() {
    //
  }
}

function testPublishToChannel(name: string) {
  MyWebsocket.sendMessageToChannel(name, `Test publish to channel`);
}
