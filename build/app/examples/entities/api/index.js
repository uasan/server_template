import { tryParseJson, decodeJSON } from "@uah/server/src/runtime/types/json.js";
import { respondJson, respondError } from "@uah/server/src/runtime/server/response.js";
import { readBody } from "@uah/server/src/runtime/server/request.js";
import { canGetEntities } from "../../../../lib/permissions.js";
import { AppContext } from "../../../context.js";
import { Direction as Dir } from "../queries/myTypes.js";
import { Validator } from "@uah/server/src/runtime/types/validator.js";
import { $0, $1, $2, $3, $4, $5 } from "../../../../refs.js";
export const FileAccess = { None: 0, Read: 2, Write: 4, ReadWrite: -2 };
const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };
const myReGexp = /\w+/;
export default class extends AppContext {
    async get(_) {
        new Validator(_).setKey("id").isInt().isMin(1).setKey("keywords", true).isString().trimString().isMinLength(1).toLowerCase().setKey("myText", true).isString().trimString().isMinLength(3).isMaxLength(5).isTextPattern(myReGexp).setKey("myArrayUUID", true, null).isNull().forArray($0).setKey("myEmail", true).isEmail().setKey("myPhone", true).isString().toDigitsString().isMinLength(3).setKey("myInt", true, 45).isInt().isMin(1).isMax(99).setKey("myFloat", true, 17.3).isNull().isNumber().isMin(10.5).isMax(20.01).setKey("myNumberArray", true).forArray($1).setKey("myUnion", true).inArray($2).setKey("myKeyOf", true).inArray($3).setKey("myEnum", true, "LEFT").inArray($4).setKey("myObject", true).isObject().setKey("myObjectRecord", true).isObject().setKey("myStructObject", true).forObject($5).validate();
        let { myArrayUUID, ...payload } = _;
        const result = await this.sql `
      SELECT *
      FROM ludicloud.users
      WHERE uid = ANY(${myArrayUUID})
    `.asObject();
        return { payload, result };
    }
    async post(payload) {
        new Validator(payload).setKey("id").isInt().isMin(1).setKey("keywords", true).isString().trimString().isMinLength(1).toLowerCase().setKey("myText", true).isString().trimString().isMinLength(3).isMaxLength(5).isTextPattern(myReGexp).setKey("myArrayUUID", true, null).isNull().forArray($0).setKey("myEmail", true).isEmail().setKey("myPhone", true).isString().toDigitsString().isMinLength(3).setKey("myInt", true, 45).isInt().isMin(1).isMax(99).setKey("myFloat", true, 17.3).isNull().isNumber().isMin(10.5).isMax(20.01).setKey("myNumberArray", true).forArray($1).setKey("myUnion", true).inArray($2).setKey("myKeyOf", true).inArray($3).setKey("myEnum", true, "LEFT").inArray($4).setKey("myObject", true).isObject().setKey("myObjectRecord", true).isObject().setKey("myStructObject", true).forObject($5).validate();
        return payload;
    }
    static get = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = { id: tryParseJson(req.getParameter(1)), keywords: req.getQuery("keywords"), myText: req.getQuery("myText"), myArrayUUID: tryParseJson(req.getQuery("myArrayUUID")), myEmail: req.getQuery("myEmail"), myPhone: req.getQuery("myPhone"), myInt: tryParseJson(req.getQuery("myInt")), myFloat: tryParseJson(req.getQuery("myFloat")), myNumberArray: tryParseJson(req.getQuery("myNumberArray")), myUnion: req.getQuery("myUnion"), myKeyOf: req.getQuery("myKeyOf"), myEnum: req.getQuery("myEnum"), myObject: tryParseJson(req.getQuery("myObject")), myObjectRecord: tryParseJson(req.getQuery("myObjectRecord")), myStructObject: tryParseJson(req.getQuery("myStructObject")) };
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