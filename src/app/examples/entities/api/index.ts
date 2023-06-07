import { ContextRequest } from '@uah/server';

type Payload = {
  id: number;
};

export class Entities extends ContextRequest {
  //@Permission('use_entities')
  async get(payload: Payload) {
    return payload.id;
  }

  async post(payload: Payload) {
    return payload.id;
  }
}
