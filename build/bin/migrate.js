import { migrate } from '@uah/server/src/runtime/migration/app.js';

import { Migration } from '../lib/Migration.js';
import { UsersTable as _1 } from '../migrations/accounts/tables/users.js';

await migrate(Migration, [_1]);
