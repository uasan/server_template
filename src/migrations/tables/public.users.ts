import { Migration } from '#lib/context/Migration';

export class UsersTable extends Migration {
  static version = 'AAAAAA';

  async up() {
    await this.sql`CREATE TABLE public.users (
      uid uuid primary key 
    )`;
  }
}
