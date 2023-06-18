import { RequestContext, Permission } from '@uah/server';
import { getItems } from '../queries/gerItems';
import { canGetEntities } from '#lib/permissions';

type Payload = {
  id: number;
};

export class Entities extends RequestContext {
  @Permission(canGetEntities)
  async get(payload: Payload) {
    getItems(1);
    await new Promise(resolve => setTimeout(resolve));
    //return 'new ReadableStream()';
  }

  async post(payload: Payload) {
    return payload.id;
  }
}
