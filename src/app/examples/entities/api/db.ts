// import myQuery from '../queries/myQuery.sql';
import { Server } from '#lib/Server';
import { type UUID } from '@uah/server';
import { MyWebsocket } from './websocket';

type Payload = {
  id: UUID;
};

export default class extends Server {
  async get(payload: Payload) {
    // this.sendMessageToChannel('AA');
    MyWebsocket.sendMessageToChannel('name', 'payload');
    // return await myQuery(this, payload);
  }
}
