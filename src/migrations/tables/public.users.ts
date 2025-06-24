import { Migration } from '#lib/context/Migration';

export class UsersTable extends Migration {
  async up() {
    await this.sql`CREATE TABLE public.users (
      uid uuid primary key 
    )`;
  }
}
