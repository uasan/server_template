import { Table, TableModel, type UUID } from '@uah/server';

@Table({
  name: 'public.users',
  primary: ['uid'],
})
export class UserTable extends TableModel {
  uid!: UUID;
  username!: string;
}
