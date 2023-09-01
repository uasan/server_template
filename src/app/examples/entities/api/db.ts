//import myQuery from '../queries/myQuery.sql';
import { type UUID } from '@uah/server';
import { Server } from '#lib/Server';

type Payload = {
  id: UUID;
};

export default class extends Server {
  async get(payload: Payload) {
    //return await myQuery(this, payload);
  }
}
