import { migrate } from '@uah/server/src/runtime/migration/app.js';

import { Migration } from '../lib/Migration.js';
import { AccountsSchema as _0 } from '../migrations/schemas/accounts.js';
import { UsersTable as _1 } from '../migrations/tables/accounts.users.js';
import { My_nameTable as _2 } from '../migrations/tables/public.my_name.js';
import { EntitiesCamelCaseTable as _3 } from '../migrations/tables/public.entitiesCamelCase.js';
import { UsersTable as _4 } from '../migrations/tables/users.js';

await migrate(Migration, [_0, _1, _2, _3, _4]);
