import { Gamebook as GamebookModel, ReadingSession } from '@prisma/client';
import { Chapter } from './chapter';
import { Progression } from './progression';
import { PublicUser } from './user';

export interface Gamebook extends GamebookModel {
  id: string;
  author: PublicUser;
  userReadingSession?: ReadingSession;
  chapterToRead?: Chapter;
  lastChapterRead?: Chapter;
  progressionsFromChapter: Progression[];
}
