import { Api } from '#lib/context/Api.ts';
import { type UUID } from '@uah/server';
import { MyWebsocket } from '../../websocket/api/json-rpc.ts';

type Payload = {
  id: UUID;
};

export default class extends Api {
  async get(payload: Payload) {
    // this.sendMessageToChannel('AA');
    MyWebsocket.sendMessageToChannel('name', 'payload');

    return await this.sql`SELECT ${payload.id} AS id`;
  }
}
