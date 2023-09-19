import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
export class UserTable extends TableModel {
    static toSQL() {
        return "ludicloud.users";
    }
    static fields = { uid: { validate: _ => _.setKey("uid").isUUID() }, username: { validate: _ => _.setKey("username").isNull().isString() } };
}