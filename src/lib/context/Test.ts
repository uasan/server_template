import { Postgres, TestContext } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'uah',
  username: 'api_ludicloud',
  password: 'pass',
})
export abstract class Test extends TestContext {
}
