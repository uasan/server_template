import { Permission } from '@uah/server';
import { getItems } from '../queries/gerItems';
import { canGetEntities } from '#lib/permissions';
import { AppContext } from '#app/context';

type Payload = {
  id: number;
};

export class Entities extends AppContext {
  @Permission(canGetEntities)
  async get(payload: Payload) {
    getItems(48);
    await new Promise(resolve => setTimeout(resolve));
    return payload;
  }

  @Permission(true)
  async post(payload: BlobOptions) {
    return payload;
  }
}
