import { Permission } from '@uah/server';
import { isUser } from './rules';

export const GetEntities = new Permission({ rules: [isUser] });
export const UseWebSocket = new Permission({ rules: [isUser] });
