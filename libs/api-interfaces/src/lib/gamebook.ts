import { Chapter } from './chapter';
import { PublicUser } from './user';

export interface Gamebook {
  id: string;
  title: string;
  description?: string;
  authorId: string;
  author?: PublicUser;
  chapters?: Chapter[];
}
