import { Migration } from '#lib/context/Migration';

export class UsersTable extends Migration {
  async up() {
    await this.sql`CREATE TABLE public.users (
      uid uuid primary key default gen_random_uuid(),
      username text UNIQUE NOT NULL
    )`;

    await this.sql`ALTER TABLE public.users OWNER TO api_ludicloud`;
  }
}
