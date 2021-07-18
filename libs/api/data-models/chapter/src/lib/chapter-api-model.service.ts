import { Injectable } from '@nestjs/common';
import { Chapter } from '@nubia/shared/api-interfaces';
import { ChapterDB } from './data';

@Injectable()
export class ChapterApiModelService {
  public async getById(id: string): Promise<Chapter | null> {
    return new Promise((res) => {
      const chapter: Chapter = ChapterDB.find((c) => c.id === id);
      if (!chapter) return res(null);

      return res(chapter);
    });
  }
  public async getByGamebookId(gamebookId: string): Promise<Chapter[]> {
    return new Promise((res) => {
      const chapters: Chapter[] = ChapterDB.filter(
        (c) => c.gamebookId === gamebookId
      );

      return res(chapters);
    });
  }
}
