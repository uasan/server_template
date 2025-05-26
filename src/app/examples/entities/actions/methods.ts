import type { Api } from '#lib/context/Api';

export async function helloWorld(context: Api) {
  return 'Hey';
}
