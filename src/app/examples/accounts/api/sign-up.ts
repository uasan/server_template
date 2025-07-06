import { User } from '#app/examples/entities/models/User';
import { Api } from '#lib/context/Api';
import type { UUID } from '@uah/server';

interface Payload {
  username: string;
}

export class SignUp extends Api {
  async post(payload: Payload) {
    return await this.sql`
      INSERT INTO ${User} (username)
      VALUES (${payload.username})
      RETURNING uid
    `.asValue() as UUID;
  }
}
