import { ContextRequest } from "@uah/server/src/runtime/server/context.js";
export class Entities extends ContextRequest {
    async get(payload) {
        return payload.id + 'as';
    }
    async post(payload) {
        return payload.id;
    }
}