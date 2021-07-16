import { Gamebook } from './gamebook';
import { ReadingSession } from './reading-session';

export interface Library {
  id: string;
  userId: string;
  gamebooks?: Gamebook[];
  readingSessions: ReadingSession[];
}
