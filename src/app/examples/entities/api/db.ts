//import myQuery from '../queries/myQuery.sql';
import { type UUID } from '@uah/server';
import { AppContext } from '#app/context';

type Payload = {
  id: UUID;
};

export default class extends AppContext {
  async get(payload: Payload) {
    //return await myQuery(this, payload);
  }
}
