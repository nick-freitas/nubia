import { Module } from '@nestjs/common';
import { Chapter } from '@nubia/api-interfaces';
import { ChapterApiModelService } from './chapter-api-model.service';
import { ChapterDB } from './data';

@Module({
  controllers: [],
  providers: [ChapterApiModelService],
  exports: [ChapterApiModelService],
})
export class ChapterApiModelModule {
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
