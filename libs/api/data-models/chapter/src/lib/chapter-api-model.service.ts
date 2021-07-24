import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Chapter } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { ChapterDB } from './data';

@Injectable()
export class ChapterApiModelService {
  constructor(private gamebookApiModelService: GamebookApiModelService) {}

  public async getStartingChapter(
    gamebookId: string,
    userId: string
  ): Promise<Chapter> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new UnauthorizedException();
    }

    return ChapterDB.find(
      (c) => c.gamebookId === gamebookId && c.isStartingChapter === true
    );
  }

  public async getById(id: string, userId: string): Promise<Chapter> {
    const chapter = ChapterDB.find((c) => c.id === id);

    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        chapter.gamebookId,
        userId
      )
    ) {
      throw new UnauthorizedException();
    }

    return chapter;
  }

  public async getByGamebookId(
    gamebookId: string,
    userId: string
  ): Promise<Chapter[]> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new UnauthorizedException();
    }

    return ChapterDB.filter((c) => c.gamebookId === gamebookId);
  }
}
