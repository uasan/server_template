import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
import { UserTable } from "./User.js";
export class EntityTable extends TableModel {
    static tableName = "persons.entitiesCamelCase";
    static fields = { id: { validate: _ => _.setKey("id").isUUID() }, uid: { validate: _ => _.setKey("uid").isUUID() } };
    myMethod() { }
}