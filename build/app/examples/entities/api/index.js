import { canGetEntities } from "../../../../lib/permissions.js";
import { Server } from "../../../../lib/Server.js";
import { Direction as Dir } from "../queries/myTypes.js";
import { UserTable } from "../models/User.js";
import { $0, $1, $2, $3, $4, $5 } from "../../../../refs.js";
import { tryParseJson, decodeJSON } from "@uah/server/src/runtime/types/json.js";
import { respondJson, respondError } from "@uah/server/src/runtime/server/response.js";
import { readBody } from "@uah/server/src/runtime/server/request.js";
import { Validator } from "@uah/server/src/runtime/types/validator.js";
export const FileAccess = { None: 0, Read: 2, Write: 4, ReadWrite: -2 };
const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };
const myReGexp = /\w+/;
class Payload {
    myArrayUUID = null;
    myEnum = Dir.Left;
}
export class Entity extends Server {
    async get(payload) {
        new Validator(payload).setKey("id").isInt().isMin(1).setKey("keywords", true).isString().trimString().toLowerCase().setKey("myText", true).isString().trimString().isTextPattern(myReGexp).setKey("myArrayUUID", true, null).isNull().forArray($0).setKey("myTuple", true).isMinLength(2).isArray().setKey("myEmail", true).isEmail().setKey("myPhone", true).isString().toDigitsString().setKey("myInt", true, 45).isInt().isMin(1).isMax(99).setKey("myFloat").isNull().isNumber().isMin(10.5).isMax(20.01).setKey("myNumberArray", true).forArray($1).setKey("myUnion").inArray($2).setKey("myKeyOf", true).inArray($3).setKey("myEnum", true, Dir.Left).inArray($4).setKey("myObject", true).isObject().setKey("myObjectRecord", true).isObject().setKey("myStructObject", true).forObject($5).validate();
        this.permission = await canGetEntities(this, payload);
        const result = await this.sql `
      SELECT *
      FROM ${UserTable} AS users
      WHERE uid = ANY(${payload.myArrayUUID})
      LIMIT `.sql(10) `
      `.asObject();
        return { payload, result };
    }
    async post(payload) {
        new Validator(payload).setKey("id").isInt().isMin(1).setKey("keywords", true).isString().trimString().toLowerCase().setKey("myText", true).isString().trimString().isTextPattern(myReGexp).setKey("myArrayUUID", true, null).isNull().forArray($0).setKey("myTuple", true).isMinLength(2).isArray().setKey("myEmail", true).isEmail().setKey("myPhone", true).isString().toDigitsString().setKey("myInt", true, 45).isInt().isMin(1).isMax(99).setKey("myFloat").isNull().isNumber().isMin(10.5).isMax(20.01).setKey("myNumberArray", true).forArray($1).setKey("myUnion").inArray($2).setKey("myKeyOf", true).inArray($3).setKey("myEnum", true, Dir.Left).inArray($4).setKey("myObject", true).isObject().setKey("myObjectRecord", true).isObject().setKey("myStructObject", true).forObject($5).validate();
        return payload;
    }
    static get = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = { id: tryParseJson(req.getParameter(1)), keywords: req.getQuery("keywords"), myText: req.getQuery("myText"), myArrayUUID: tryParseJson(req.getQuery("myArrayUUID")), myTuple: tryParseJson(req.getQuery("myTuple")), myEmail: req.getQuery("myEmail"), myPhone: req.getQuery("myPhone"), myInt: tryParseJson(req.getQuery("myInt")), myFloat: tryParseJson(req.getQuery("myFloat")), myNumberArray: tryParseJson(req.getQuery("myNumberArray")), myUnion: req.getQuery("myUnion"), myKeyOf: req.getQuery("myKeyOf"), myEnum: req.getQuery("myEnum"), myObject: tryParseJson(req.getQuery("myObject")), myObjectRecord: tryParseJson(req.getQuery("myObjectRecord")), myStructObject: tryParseJson(req.getQuery("myStructObject")) };
        await ctx.auth();
        respondJson(res, ctx, await ctx.get(data));
    }
    catch (e) {
        respondError(res, e)
    } };
    static post = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = readBody(req, res);
        respondJson(res, ctx, await ctx.post(decodeJSON(await data)));
    }
    catch (e) {
        respondError(res, e)
    } };
}