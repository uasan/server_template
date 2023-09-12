import { TableModel, type UUID } from '@uah/server';

export class UserTable extends TableModel<{
  name: 'accounts.users';
  primary: ['uid'];
}> {
  uid: UUID;
  username: string | null;
}
