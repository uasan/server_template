import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
export class User extends TableModel {
    static tableName = 'users';
}