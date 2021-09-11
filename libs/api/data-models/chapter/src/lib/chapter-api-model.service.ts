import { Injectable, ForbiddenException } from '@nestjs/common';
import { Chapter, Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class ChapterApiModelService {
  constructor(
    private gamebookApiModelService: GamebookApiModelService,
    private readonly apiDbClientService: ApiDbClientService
  ) {}

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
      throw new ForbiddenException();
    }

    return this.apiDbClientService.chapter.findFirst({
      where: { AND: [{ gamebookId: gamebookId }, { isStartingChapter: true }] },
    });
  }

  public async getById(id: string, userId: string): Promise<Chapter> {
    console.log(id, userId);
    const chapter = await this.apiDbClientService.chapter.findUnique({
      where: { id: id },
    });

    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        chapter.gamebookId,
        userId
      )
    ) {
      throw new ForbiddenException();
    }

    console.log(chapter);
    return chapter;
  }

  public async getByGamebookId(
    gamebookId: string,
    userId: string
  ): Promise<Array<Chapter>> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new ForbiddenException();
    }

    console.log(gamebookId);

    return this.apiDbClientService.chapter.findMany({
      where: { gamebookId: gamebookId },
    });
  }
}
