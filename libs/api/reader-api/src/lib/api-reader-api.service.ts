import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { ReadingSessionApiModelService } from '@nubia/api/data-models/reading-session';

@Injectable()
export class ApiReaderApiService {
  constructor(
    private gamebookApiModelService: GamebookApiModelService,
    private readingSessionApiModelService: ReadingSessionApiModelService,
    private userApiModelService: UserApiModelService
  ) {}

  public async getAll() {
    return this.userApiModelService._getFullList();
  }

  public async getGamebookLibrary(
    userId: string
  ): Promise<Array<Partial<Gamebook>>> {
    return this.gamebookApiModelService.getLibraryGamebooks(userId);
  }

  public async getGamebook(
    id: string,
    userId: string
  ): Promise<Gamebook | null> {
    if (
      !this.gamebookApiModelService.userOwnsOrAuthoredTheGamebook(id, userId)
    ) {
      throw new UnauthorizedException();
    }

    const gamebook = await this.gamebookApiModelService.getById(id);
    const readingSession =
      await this.readingSessionApiModelService.getReadingSession(userId, id);

    if (gamebook) {
      gamebook.userReadingSession = readingSession;
    }
    return gamebook;
  }
}
