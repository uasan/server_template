import { ServerContext, Postgres } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'develop',
  username: 'api_ludicloud',
  password: 'pass',
})
export class Server extends ServerContext {
  async auth() {
    //
  }
}
