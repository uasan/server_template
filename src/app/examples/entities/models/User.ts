import { TableModel, type UUID } from '@uah/server';

export class UserTable extends TableModel<{
  name: 'ludicloud.users';
  primary: ['uid'];
}> {
  uid: UUID;
  username: string | null;
}
