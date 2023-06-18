import { RequestContext } from '@uah/server/src/runtime/server/context.js';
import { getItems } from '../queries/gerItems.js';
import { canGetEntities } from '../../../../lib/permissions.js';
import { createContext } from '@uah/server/src/runtime/server/request.js';
import {
  respondNoContent,
  respondError,
  respondJson,
} from '@uah/server/src/runtime/server/response.js';
import { Router } from '@uah/server/src/runtime/server/router.js';
export class Entities extends RequestContext {
  async get(payload) {
    getItems(1);
    await new Promise(resolve => setTimeout(resolve));
  }
  async post(payload) {
    return payload.id;
  }
  static {
    Router.set('get', 'examples/entities', async (res, req) => {
      try {
        const ctx = createContext(this, req, res);
        await ctx.get();
        respondNoContent(res, ctx);
      } catch (e) {
        respondError(res, e);
      }
    });
    Router.set('post', 'examples/entities', async (res, req) => {
      try {
        const ctx = createContext(this, req, res);
        respondJson(res, ctx, await ctx.post());
      } catch (e) {
        respondError(res, e);
      }
    });
  }
}
