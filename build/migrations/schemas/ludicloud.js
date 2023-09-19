import { Migration } from '../../lib/Migration.js';

export class LudicloudSchema extends Migration {
  static path = 'schemas/ludicloud';

  async up() {
    await this.postgres.query('CREATE SCHEMA IF NOT EXISTS "ludicloud"');
  }

  async down() {
    await this.postgres.query('DROP SCHEMA IF EXISTS "ludicloud"');
  }
}
