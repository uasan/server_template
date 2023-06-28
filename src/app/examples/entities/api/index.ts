import {
  Permission,
  type Text,
  type Int,
  type UUID,
  type Email,
  type Default,
} from '@uah/server';
import { canGetEntities } from '#lib/permissions';
import { AppContext } from '#app/context';
import { Direction as Dir } from '../queries/gerItems';

export enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read - Write,
}

const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };

const myReGexp = /\w+/;

export type Payload = {
  id: number;
  myText?: Text<{ max: 3; mix: 5; trim: true; pattern: typeof myReGexp }>;
  myUuid?: UUID;
  myEmail?: Email;
  myNumber?: Int<{ min: 1; max: 99; default: 45 }> | null;
  myNumberArray?: number[];
  myKeyOf?: keyof typeof keyObj | number;
  myEnum?: Dir | Default<Dir.Left>;
  myObject?: {
    textValue: string;
    num: number;
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
