import { Postgres, MigrationContext } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'develop333',
  username: 'api_ludicloud',
  password: 'pass',
})
export class Migration extends MigrationContext {}
