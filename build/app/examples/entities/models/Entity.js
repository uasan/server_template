import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
import { User } from "./User.js";
export class EntityModel extends TableModel {
    static tableName = 'myTable';
}