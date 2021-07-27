import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { UserApiModelService } from '@nubia/api/data-models/user';

@Injectable()
export class ApiReaderApiService {
  constructor(
    private gamebookApiModelService: GamebookApiModelService,
    private userApiModelService: UserApiModelService
  ) {}

  public async getAll() {
    return this.userApiModelService._getFullList();
  }

  public async getGamebookLibrary(userId: string): Promise<Array<Gamebook>> {
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

    return this.gamebookApiModelService.getById(id);
  }
}
