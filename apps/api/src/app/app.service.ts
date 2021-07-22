import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Gamebook, Message } from '@nubia/shared/api-interfaces';
import { GamebookLibraryService } from '@nubia/api/data-models/gamebook-library';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';

@Injectable()
export class AppService {
  constructor(
    private gamebookLibraryService: GamebookLibraryService,
    private gamebookApiModelService: GamebookApiModelService
  ) {}
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  public async getGamebookLibrary(userId: string): Promise<Array<Gamebook>> {
    return this.gamebookLibraryService.getLibraryGamebooks(userId);
  }

  public async getGamebook(id: string, userId: string): Promise<Gamebook> {
    const isOwned = await this.gamebookLibraryService.checkOwnership(
      id,
      userId
    );

    if (!isOwned) {
      throw new UnauthorizedException("You don't own this");
    }

    return this.gamebookApiModelService.getById(id);
  }
}
