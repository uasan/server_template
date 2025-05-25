import type { User } from '#app/examples/entities/models/User.ts';
import { Postgres, Server, ServerContext, SessionJWT } from '@uah/server';

@Server({
  url: 'http://localhost:3000/api/',
})
@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'uah',
  username: 'api_ludicloud',
  password: 'pass',
  maxConnections: 10,
})
@SessionJWT({
  secret: 'My private key',
  maxAge: 3600,
})
export class Api extends ServerContext {
  lang: string;
  uid!: User['uid'];

  constructor(preset: { lang: string }) {
    super();
    this.lang = preset.lang;
  }
}
