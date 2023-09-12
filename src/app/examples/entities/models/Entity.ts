import { TableModel, type UUID } from '@uah/server';
import { UserTable } from './User';

export class EntityTable extends TableModel<{
  name: 'entitiesCamelCase';
  primary: ['id'];
  references: {
    myRefName: {
      onUpdate: 'cascade';
      onDelete: 'cascade';
      deferrable: 'deferred';
      keys: {
        id: UserTable['uid'];
        uid: UserTable['username'];
      };
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
