import { ReadingSession } from './reading-session';

export interface GamebookLibrary {
  id: string;
  userId: string;
  gamebookIds: string[];
  readingSessions?: ReadingSession[];
}
