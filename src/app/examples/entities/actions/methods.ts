import type { Api } from '#lib/context/Api';

interface Payload {
  a: string;
}

export async function helloWorld(context: Api, data: Payload) {
  return data.a;
}
