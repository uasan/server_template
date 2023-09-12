import { Migration } from "../../lib/Migration.js";
export class UsersTable extends Migration {
    static path = "tables/users";
    async up() {
        await this.sql `CREATE TABLE public.users (

    )`;
    }
}