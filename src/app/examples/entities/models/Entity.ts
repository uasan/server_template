import { Table, TableModel, type UUID } from '@uah/server';
import { UserTable } from './User';

@Table({
  name: 'persons.entitiesCamelCase',
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
  //},
  // constrains: {
  //   //...
  // };
  // indexes: {
  //   //...
  // };
})
export class EntityTable extends TableModel {
  id!: UUID;
  uid!: UserTable['uid'];
}
