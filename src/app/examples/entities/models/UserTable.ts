import { TableModel, type UUID } from '@uah/server';

interface TableStruct {
  name: 'users';
  primary: ['uid'];
}

export class UserTable extends TableModel<TableStruct> {
  uid: UUID;
  username: string | null;
}
