import { tryParseJson } from "@uah/server/src/runtime/types/converters.js";
import { respondJson, respondError } from "@uah/server/src/runtime/server/response.js";
import { canGetEntities } from "../../../../lib/permissions.js";
import { AppContext } from "../../../context.js";
import { Direction as Dir } from "../queries/gerItems.js";
import { Validator } from "@uah/server/src/runtime/types/validator.js";
export const FileAccess = { None: 0, Read: 2, Write: 4, ReadWrite: -2 };
export class Entities extends AppContext {
    async get(payload) {
        new Validator(payload).setKey("id").checkNumber().setKey("myText", true).checkString().setKey("myUuid", true).checkArray().setKey("myNumber", true).checkNull().checkNumber().setKey("myNumberArray", true).checkArray().setKey("myAny", true, 'B').checkUnit().setKey("myEnum", true, Dir.Left).checkEnum(Dir).setKey("myObject", true).checkObject().validate();
        await new Promise(resolve => setTimeout(resolve));
        return payload;
    }
    static get = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = { id: tryParseJson(req.getParameter(1)), myText: req.getQuery("myText"), myUuid: tryParseJson(req.getQuery("myUuid")), myNumber: tryParseJson(req.getQuery("myNumber")), myNumberArray: tryParseJson(req.getQuery("myNumberArray")), myAny: req.getQuery("myAny"), myEnum: req.getQuery("myEnum"), myObject: tryParseJson(req.getQuery("myObject")) };
        await ctx.auth();
        respondJson(res, ctx, await ctx.get(data));
    }
    catch (e) {
        respondError(res, e)
    } };
}