import { Migration } from '../../lib/Migration.js';

export class My_nameTable extends Migration {
  static path = 'tables/public.my_name';

  async up() {
    await this.postgres.query(`CREATE TABLE public.my_name (
      "id" uuid NOT NULL,
      "uid" uuid NOT NULL
    )`);
  }

  async down() {
    await this.postgres.query('DROP TABLE public.my_name');
  }
}
