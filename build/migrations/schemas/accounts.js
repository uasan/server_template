import { Migration } from '../../lib/Migration.js';

export class AccountsSchema extends Migration {
  static path = 'schemas/accounts';

  async up() {
    await this.postgres.query('CREATE SCHEMA IF NOT EXISTS "accounts"');
  }

  async down() {
    await this.postgres.query('DROP SCHEMA IF EXISTS "accounts"');
  }
}
