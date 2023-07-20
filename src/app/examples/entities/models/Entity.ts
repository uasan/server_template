import { TableModel } from '@uah/server';

export class Entity extends TableModel {
  static tableName = 'myTable';
}

// export class Entity2 extends Entity {
//   static tableName = 'myTable';

//   my_jsonb: Column<jsonb>
// }
