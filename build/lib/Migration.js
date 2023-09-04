import { MigrationContext } from "@uah/server/src/runtime/migration/context.js";
import { initPostgres } from "@uah/server/src/runtime/postgres/context.js";
export class Migration extends MigrationContext {
    static {
        initPostgres(this, {
            port: 5432,
            host: 'localhost',
            database: 'AAAAAA',
            username: 'postgres',
            password: 'pass',
        });
    }
}