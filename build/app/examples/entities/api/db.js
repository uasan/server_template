import { Server } from "../../../../lib/Server.js";
import { respondNoContent, respondError } from "@uah/server/src/runtime/server/response.js";
import { Validator } from "@uah/server/src/runtime/types/validator.js";
export default class extends Server {
    async get(payload) {
        new Validator(payload).setKey("id").isUUID().validate();
    }
    static get = async (res, req) => { try {
        const ctx = this.create(req, res);
        const data = { id: req.getParameter(1) };
        await ctx.get(data);
        respondNoContent(res, ctx);
    }
    catch (e) {
        respondError(res, e)
    } };
}