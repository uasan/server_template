import { Migration } from '../../lib/Migration.js';

export class PersonsSchema extends Migration {
  static path = 'schemas/persons';

  async up() {
    await this.postgres.query('CREATE SCHEMA IF NOT EXISTS "persons"');
  }

  async down() {
    await this.postgres.query('DROP SCHEMA IF EXISTS "persons"');
  }
}
