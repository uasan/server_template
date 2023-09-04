import { ServerContext, Postgres } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'develop',
  username: 'api_ludicloud',
  password: 'pass',
  maxConnections: 10,
})
export class Server extends ServerContext {
  async auth() {
    //
  }
}
