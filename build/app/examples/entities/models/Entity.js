import { TableModel } from "@uah/server/src/runtime/postgres/model.js";
import { Table } from "@uah/server/src/runtime/postgres/decorators.js";
import { User } from "./User.js";
@Table({
    name: 'my_name',
    primary: ['id'],
    references: {},
    constrains: {},
    indexes: {},
})
export class EntityModel extends TableModel {
}