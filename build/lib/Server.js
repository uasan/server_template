import { ServerContext } from "@uah/server/src/runtime/server/context.js";
import { initPostgres } from "@uah/server/src/runtime/postgres/context.js";
export class Server extends ServerContext {
    async auth() {
    }
    static {
        initPostgres(this, {
            port: 5432,
            host: 'localhost',
            database: 'develop',
            username: 'api_ludicloud',
            password: 'pass',
        });
    }
}