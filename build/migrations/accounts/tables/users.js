import { Migration } from "../../../lib/Migration.js";
export class UsersTable extends Migration {
    static path = "accounts/tables/users";
    async up() {
        await this.sql `CREATE TABLE accounts.users (

    )`;
    }
}