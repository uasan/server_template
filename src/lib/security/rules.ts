import type { Api } from '#lib/context/Api';

export function isUser<T extends Api>(context: T) {
  return !!context.user;
}
