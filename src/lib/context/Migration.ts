import { Postgres, MigrationContext } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'uah',
  username: 'postgres',
  password: 'pass',
})
export class Migration extends MigrationContext {}
