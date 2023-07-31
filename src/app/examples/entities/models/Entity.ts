import { TableModel, Table, type UUID } from '@uah/server';
import { User } from './User';

@Table({
  name: 'my_name',
  primary: ['id'],
  references: {
    //...
  },
  constrains: {
    //...
  },
  indexes: {
    //...
  },
})
export class EntityModel extends TableModel {
  id: UUID;
  uid: User['uid'];
}
