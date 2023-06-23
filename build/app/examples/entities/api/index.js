import { getItems } from "../queries/gerItems.js";
import { canGetEntities } from "../../../../lib/permissions.js";
import { AppContext } from "../../../context.js";
import { tryToNumber, decodeJSON } from "@uah/server/src/runtime/types/converters.js";
import { respondJson, respondError } from "@uah/server/src/runtime/server/response.js";
import { Router } from "@uah/server/src/runtime/server/router.js";
import { readBody } from "@uah/server/src/runtime/server/request.js";
export class Entities extends AppContext {
    async get(payload) {
        getItems(48);
        await new Promise(resolve => setTimeout(resolve));
        return payload;
    }
    async post(payload) {
        return payload;
    }
    static {
        Router.set("get", "examples/entities/:id", async (res, req) => { try {
            const ctx = this.create(req, res);
            const data = { id: tryToNumber(req.getParameter(1)) };
            await ctx.auth();
            respondJson(res, ctx, await ctx.get(data));
        }
        catch (e) {
            respondError(res, e)
        } });
        Router.set("post", "examples/entities", async (res, req) => { try {
            const ctx = this.create(req, res);
            const data = readBody(req, res);
            respondJson(res, ctx, await ctx.post(decodeJSON(await data)));
        }
        catch (e) {
            respondError(res, e)
        } });
    }
}