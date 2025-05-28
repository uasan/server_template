import type { Api } from '#lib/context/Api';

export function isUser(context: Api) {
  return !!context.user;
}

export function isAdmin(context: Api) {
  return context.user.roles.includes('admin');
}
