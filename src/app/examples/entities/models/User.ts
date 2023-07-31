import { TableModel, type UUID } from '@uah/server';

export class User extends TableModel {
  static tableName = 'users';

  uid: UUID;
}
