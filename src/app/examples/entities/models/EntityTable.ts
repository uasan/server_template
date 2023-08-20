import { TableModel, type UUID } from '@uah/server';
import { UserTable } from './UserTable';

export class EntityTable extends TableModel<{
  name: 'my_name';
  primary: ['id'];
  references: {
    myRefName: {
      onUpdate: 'cascade';
      onDelete: 'setNull';
      deferrable: 'deferred';
      keys: { id: UserTable['uid']; uid: UserTable['username'] };
    };
  };
  constrains: {
    //...
  };
  indexes: {
    //...
  };
}> {
  id: UUID;
  uid: UserTable['uid'];

  myMethod() {}
}
