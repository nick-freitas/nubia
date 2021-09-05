import { ForbiddenException, Injectable } from '@nestjs/common';
import { Chapter, Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { ChapterApiModelService } from '@nubia/api/data-models/chapter';
import { ProgressionApiModelService } from '@nubia/api/data-models/progression';
import { Choice } from '@nubia/shared/api-interfaces';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { ReadingSessionApiModelService } from '@nubia/api/data-models/reading-session';

@Injectable()
export class EditorApiService {
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

  public async getGamebooks(userId: string): Promise<Array<Partial<Gamebook>>> {
    return this.gamebookApiModelService.getLibraryGamebooks(userId);
  }
}
