import { Gamebook as GamebookModel } from '@prisma/client';
import { PublicUser } from './user';

export interface Gamebook extends GamebookModel {
  id: string;
  author: PublicUser;
}
