import { Migration } from '../../lib/Migration.js';

export class UsersTable extends Migration {
  static path = 'tables/ludicloud.users';

  async up() {
    await this.postgres.query(`CREATE TABLE ludicloud.users (
      "uid" uuid NOT NULL,
      "username" text
    )`);
  }

  async down() {
    await this.postgres.query('DROP TABLE ludicloud.users');
  }
}
