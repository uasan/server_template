import {
  Permission,
  type Text,
  type Int,
  type Float,
  type Email,
} from '@uah/server';
import { canGetEntities } from '#lib/permissions';
import { Server } from '#lib/Server.ts';
import {
  Direction as Dir,
  type IntPositive,
  type Keywords,
  type PhoneNumber,
} from '../queries/myTypes.ts';
import type { EntityTable } from '../models/Entity.ts';
import { UserTable } from '../models/User.ts';

export enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read - Write,
}

const keyObj = { key1: 'KEY 1', key2: 'KEY 2', key3: 'KEY 3' };

const myReGexp = /\w+/;

declare class SubObject {
  textValue: string;
  num: Int<{ min: 3; }>;
}

class Payload {
  id: IntPositive;
  keywords?: Keywords;
  myText?: Text<{
    min: 3;
    max: 5;
    trim: true;
    pattern: typeof myReGexp;
  }>;
  myArrayUUID?: EntityTable['id'][] | null = null;
  myTuple?: [string, number, ...string[]];
  myEmail?: Email;
  myPhone?: PhoneNumber;
  myInt?: Int<{
    min: 1;
    max: 99;
    default: 45;
  }>;
  myFloat?: Float<{
    min: 10.5;
    max: 20.01;
    default: 17.3;
  }> | null;
  myNumberArray?: number[];
  myUnion?: 'A' | 'B' | 'C' | null;
  myKeyOf?: keyof typeof keyObj;
  myEnum?: Dir = Dir.Left;
  myObject?: object;
  myObjectRecord?: Record<string, string>;
  myStructObject?: SubObject;
}

export class Entity extends Server {
  @Permission(canGetEntities)
  async get(payload: Payload) {
    const result = await this.sql`
      SELECT *
      FROM ${UserTable} AS users
      WHERE uid = ANY(${payload.myArrayUUID})
      LIMIT `.sql(10)`
      `.asObject();

    return { payload, result };
  }

  async post(payload: Payload) {
    return payload;
  }
}
