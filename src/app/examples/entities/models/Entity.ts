import { Table, TableModel, type UUID } from '@uah/server';
import type { User } from './User';

@Table({
  name: 'persons.entitiesCamelCase',
  isAutoCreate: true,
  primary: ['id'],
  // references: {
  //   myRefName: {
  //     onUpdate: 'cascade',
  //     onDelete: 'cascade',
  //     deferrable: 'deferred',
  //     keys: {
  //       id: UserTable['uid'];
  //       uid: UserTable['username'];
  //     };
  //   };
  // },
  // constrains: {
  //   //...
  // };
  // indexes: {
  //   //...
  // };
})
export class EntityTable extends TableModel {
  id!: UUID;
  uid!: User['uid'];
}
