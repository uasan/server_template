import { RequestContext, Postgres } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'develop',
  username: 'api_ludicloud',
  password: 'pass',
})
export class AppContext extends RequestContext {
  async auth() {
    //
  }
}
