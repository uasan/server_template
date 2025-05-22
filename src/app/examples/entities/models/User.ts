import { Table, TableModel, type Text, type UUID } from '@uah/server';

@Table({
  name: 'public.users',
  primary: ['uid'],
})
export class User extends TableModel {
  uid!: UUID;
  username!: Text<{ maxLength: 10 }>;
}
