import { Migration } from '../../lib/Migration.js';

export class EntitiesCamelCaseTable extends Migration {
  static path = 'tables/persons.entitiesCamelCase';

  async up() {
    await this.postgres.query(`CREATE TABLE persons.entitiesCamelCase (
      "id" uuid NOT NULL,
      "uid" uuid NOT NULL
    )`);
  }

  async down() {
    await this.postgres.query('DROP TABLE persons.entitiesCamelCase');
  }
}
