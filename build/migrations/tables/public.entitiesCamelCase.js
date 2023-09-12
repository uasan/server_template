import { Migration } from '../../lib/Migration.js';

export class EntitiesCamelCaseTable extends Migration {
  static path = 'tables/public.entitiesCamelCase';

  async up() {
    await this.postgres.query(`CREATE TABLE public.entitiesCamelCase (
      "id" uuid NOT NULL,
      "uid" uuid NOT NULL
    )`);
  }

  async down() {
    await this.postgres.query('DROP TABLE public.entitiesCamelCase');
  }
}
