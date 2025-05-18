import { Postgres, Server, ServerContext } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'uah',
  username: 'api_ludicloud',
  password: 'pass',
  maxConnections: 10,
})
@Server({
  url: 'http://localhost:3000/api/',
})
export class Api extends ServerContext {
  lang: string;

  constructor(preset: { lang: string }) {
    super();
    this.lang = preset.lang;
  }

  async auth() {
    //
  }
}
