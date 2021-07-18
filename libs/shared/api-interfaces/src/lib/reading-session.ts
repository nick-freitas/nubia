import { Progression } from './progression';

export interface ReadingSession {
  id: string;
  userId: string;
  gamebookId: string;
  chapterId: string;
  progressionStack: Progression[];
}
