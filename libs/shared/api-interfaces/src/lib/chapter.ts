import { Chapter as ChapterModel } from '@prisma/client';

export interface Chapter extends ChapterModel {
  id: string;
}
