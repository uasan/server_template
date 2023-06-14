import { ContextRequest } from '@uah/server';
//import { Permissions } from '#lib/permissions.ts';
import { getItems } from '../queries/gerItems';

type Payload = {
  id: number;
};

export default class Entities extends ContextRequest {
  //@Permissions.gerEntities
  async get(payload: Payload) {
    getItems(payload.id);
    return payload.id;
  }

  async post(payload: Payload) {
    return payload.id;
  }
}
