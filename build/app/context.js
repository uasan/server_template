import { RequestContext } from "@uah/server/src/runtime/server/context.js";
import { initPostgres } from "@uah/server/src/runtime/postgres/context.js";
export class AppContext extends RequestContext {
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