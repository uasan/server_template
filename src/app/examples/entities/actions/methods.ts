import type { Server } from '#lib/Server';

export async function helloWorld(context: Server) {
  return context.user;
}
