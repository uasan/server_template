import { TableModel, type Column, type UUID } from '@uah/server';

export class Entity extends TableModel {
  static tableName = 'myTable';

  id: Column<UUID, { primary: true; default: '1' }> = '';
}
