import { Chapter } from './chapter';
import { Progression } from './progression';

export interface Choice {
  chapterId: string;
  previousChapterId: string;
  previousChapter?: Chapter;
  progressionTakenId: string;
  progressionTaken?: Progression;
  createdAt: Date;
}
