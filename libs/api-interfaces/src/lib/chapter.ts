import { Progression } from './progression';

export interface Chapter {
  id: string;
  gamebookId: string;
  isStartingChapter?: boolean;
  isEndingChapter?: boolean;
  title?: string;
  content?: string;
  inProgressions?: Progression[];
  outProgressions?: Progression[];
}
