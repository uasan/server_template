import { ContextRequest } from "@uah/server/src/runtime/server/context.js";
import { getItems } from "../queries/gerItems.js";
export default class Entities extends ContextRequest {
    async get(payload) {
        getItems(payload.id);
        return payload.id;
    }
    async post(payload) {
        return payload.id;
    }
    static {
        this.router.set("get", "examples/entities", async (res, req) => { this.request(req, res) });
        this.router.set("post", "examples/entities", async (res, req) => { this.request(req, res) });
    }
}