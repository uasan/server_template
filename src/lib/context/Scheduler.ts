import { Postgres, SchedulerContext } from '@uah/server';

@Postgres({
  port: 5432,
  host: 'localhost',
  database: 'uah',
  username: 'postgres',
  password: 'pass',
})
export abstract class Scheduler extends SchedulerContext {
  static readonly instance: Scheduler;
}
