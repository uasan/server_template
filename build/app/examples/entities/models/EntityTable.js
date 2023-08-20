import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
import { UserTable } from "./UserTable.js";
export class EntityTable extends TableModel {
    static tableName = "my_name";
    static fields = { id: { validate: _ => _.setKey("id").isUUID() }, uid: { validate: _ => _.setKey("uid").isUUID() } };
    myMethod() { }
}