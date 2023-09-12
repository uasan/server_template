import { Migration } from '#lib/Migration';

export class UsersTable extends Migration {
  async up() {
    await this.sql`CREATE TABLE public.users (

    )`;
  }
}
