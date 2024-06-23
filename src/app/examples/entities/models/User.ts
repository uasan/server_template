import { Table, TableModel, type UUID } from '@uah/server';

@Table({
  name: 'ludicloud.users',
  primary: ['uid'],
})
export class UserTable extends TableModel {
  uid!: UUID;
  username!: string;
}
