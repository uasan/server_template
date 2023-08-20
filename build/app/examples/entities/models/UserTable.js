import { TableModel } from '@uah/server/src/runtime/postgres/model.js';
export class UserTable extends TableModel {
  static tableName = 'users';
  static fields = {
    uid: { validate: _ => _.setKey('uid').isUUID() },
    username: { validate: _ => _.setKey('username').isNull().isString() },
  };
}
