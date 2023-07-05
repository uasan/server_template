import {
  Permission,
  type Text,
  type Int,
  type Float,
  type UUID,
  type Email,
  type Default,
} from '@uah/server';
import { canGetEntities } from '#lib/permissions';
import { AppContext } from '#app/context';
import {
  Direction as Dir,
  type IntPositive,
  type Keywords,
  type PhoneNumber,
} from '../queries/myTypes.ts';

export enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read - Write,
}

const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };

const myReGexp = /\w+/;

interface Payload1 {
  textValue: string;
  num: Int<{ min: 3 }>;
}

interface Payload {
  id: IntPositive;
  keywords?: Keywords;
  myText?: Text<{ min: 3; max: 5; trim: true; pattern: typeof myReGexp }>;
  myArrayUUID?: (UUID | null)[] | Default<null>;
  myEmail?: Email;
  myPhone?: PhoneNumber;
  myInt?: Int<{ min: 1; max: 99; default: 45 }>;
  myFloat?: Float<{ min: 10.5; max: 20.01; default: 17.3 }> | null;
  myNumberArray?: number[];
  myUnion?: 'A' | 'B' | 'C' | null;
  myKeyOf?: keyof typeof keyObj;
  myEnum?: Dir | Default<Dir.Left>;
  myObject?: object;
  myObjectRecord?: Record<string, any>;
  myStructObject?: Payload1;
}

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
