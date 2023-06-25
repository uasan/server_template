import { Permission, type UUID, type Default } from '@uah/server';
import { canGetEntities } from '#lib/permissions';
import { AppContext } from '#app/context';
import { Direction as Dir } from '../queries/gerItems';

export enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read - Write,
}

type Payload = {
  id: number;
  myText?: string;
  myUuid?: UUID[];
  myNumber?: number | null;
  myNumberArray?: number[];
  myAny?: 'A' | Default<'B'> | 'C';
  myEnum?: Dir | Default<Dir.Left>;
  myObject?: {
    textValue: string;
  };
};

export class Entities extends AppContext {
  @Permission(canGetEntities)
  async get(payload: Payload) {
    await new Promise(resolve => setTimeout(resolve));
    return payload;
  }

  // @Permission(true)
  // async post(payload: Payload) {
  //   return payload;
  // }
}
