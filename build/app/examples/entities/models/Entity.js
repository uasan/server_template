import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
export class Entity extends TableModel {
    static tableName = 'myTable';
    id = '';
}