import { migrate } from '@uah/server/src/runtime/migration/app.js';

import { Migration as _0 } from '../lib/Migration.js';
import { UsersTable as _1 } from '../migrations/accounts/tables/users.js';

await migrate(_0, [_1]);
