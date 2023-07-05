import type { Int, Text } from '@uah/server';

export type IntPositive = Int<{ min: 1 }>;
export type PhoneNumber = Text<{ min: 3; digits: true }>;
export type Keywords = Text<{ min: 1; trim: true; lowercase: true }>;

export const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export const keyObj = {
  key1: 'Key 1',
  key2: 'Key 2',
  key3: 'Key 3',
};

export function getItems(id: number) {
  return id;
}

export default 'AAAA';
