import { tryParseJson } from "@uah/server/src/runtime/types/json.js";
import { respondJson, respondError } from "@uah/server/src/runtime/server/response.js";
import { canGetEntities } from "../../../../lib/permissions.js";
import { AppContext } from "../../../context.js";
import { Direction as Dir } from "../queries/gerItems.js";
import { Validator } from "@uah/server/src/runtime/types/validator.js";
import { $0 } from "../../../../refs.js";
export const FileAccess = { None: 0, Read: 2, Write: 4, ReadWrite: -2 };
const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };
const myReGexp = /\w+/;
export class Entities extends AppContext {
    async get(payload) {
        new Validator(payload).setKey("id").isNumber().setKey("myText", true).isString().trimString().isTextMax(3).isTextPattern(myReGexp).setKey("myUuid", true).isUUID().setKey("myEmail", true).isEmail().setKey("myNumber", true, 45).setNullable().isInt().isIntMin(1).isIntMax(99).setKey("myNumberArray", true).isArray().setKey("myKeyOf", true).setKey("myEnum", true, "LEFT").inArray($0).setKey("myObject", true).isObject().validate();
        await new Promise(resolve => setTimeout(resolve));
        return payload;
    }
    static get = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = { id: tryParseJson(req.getParameter(1)), myText: req.getQuery("myText"), myUuid: req.getQuery("myUuid"), myEmail: req.getQuery("myEmail"), myNumber: tryParseJson(req.getQuery("myNumber")), myNumberArray: tryParseJson(req.getQuery("myNumberArray")), myKeyOf: req.getQuery("myKeyOf"), myEnum: req.getQuery("myEnum"), myObject: tryParseJson(req.getQuery("myObject")) };
        await ctx.auth();
        respondJson(res, ctx, await ctx.get(data));
    }
    catch (e) {
        respondError(res, e)
    } };
}