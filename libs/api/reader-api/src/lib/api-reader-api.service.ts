import { ForbiddenException, Injectable } from '@nestjs/common';
import { Chapter, Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { ChapterApiModelService } from '@nubia/api/data-models/chapter';
import { ProgressionApiModelService } from '@nubia/api/data-models/progression';
import { Choice } from '@nubia/shared/api-interfaces';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { ReadingSessionApiModelService } from '@nubia/api/data-models/reading-session';

@Injectable()
export class ApiReaderApiService {
  constructor(
    private chapterApiModelService: ChapterApiModelService,
    private progressionApiModelService: ProgressionApiModelService,
    private gamebookApiModelService: GamebookApiModelService,
    private readingSessionApiModelService: ReadingSessionApiModelService,
    private userApiModelService: UserApiModelService
  ) {}

  public async getAll() {
    return this.userApiModelService._getFullList();
  }

  public async makeProgressionChoice(
    userId: string,
    gamebookId: string,
    progressionId: string
  ): Promise<Gamebook | null> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new ForbiddenException();
    }

    await this.readingSessionApiModelService.makeProgressionChoice(
      userId,
      gamebookId,
      progressionId
    );

    return this.getGamebook(gamebookId, userId);
  }

  public async getGamebookLibrary(
    userId: string
  ): Promise<Array<Partial<Gamebook>>> {
    return this.gamebookApiModelService.getLibraryGamebooks(userId);
  }

  public async previousChoice(
    gamebookId: string,
    userId: string
  ): Promise<Gamebook | null> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new ForbiddenException();
    }

    await this.readingSessionApiModelService.previousChoice(userId, gamebookId);

    return this.getGamebook(gamebookId, userId);
  }

  public async resetChoices(
    gamebookId: string,
    userId: string
  ): Promise<Gamebook | null> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(
        gamebookId,
        userId
      )
    ) {
      throw new ForbiddenException();
    }

    await this.readingSessionApiModelService.resetChoices(userId, gamebookId);

    return this.getGamebook(gamebookId, userId);
  }

  public async getGamebook(
    id: string,
    userId: string
  ): Promise<Gamebook | null> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(id, userId)
    ) {
      throw new ForbiddenException();
    }

    const gamebook = await this.gamebookApiModelService.getById(id);
    if (!gamebook) return null;

    const readingSession =
      await this.readingSessionApiModelService.getReadingSession(userId, id);
    gamebook.userReadingSession = readingSession;

    const lastChoice: Choice | undefined = readingSession?.choicesObj?.[0];
    gamebook.chapterToRead = await this.getChapterToRead(
      lastChoice,
      id,
      userId
    );

    if (lastChoice?.previousChapterId) {
      gamebook.lastChapterRead = await this.chapterApiModelService.getById(
        lastChoice.previousChapterId,
        userId
      );
    }

    gamebook.progressionsFromChapter =
      await this.progressionApiModelService.getProgressionsFromChapter(
        gamebook.chapterToRead.id
      );

    return gamebook;
  }

  private async getChapterToRead(
    lastChoice: Choice | undefined,
    gamebookId: string,
    userId: string
  ): Promise<Chapter> {
    if (lastChoice?.chapterId) {
      return this.chapterApiModelService.getById(lastChoice.chapterId, userId);
    }

    return this.chapterApiModelService.getStartingChapter(gamebookId, userId);
  }
}
