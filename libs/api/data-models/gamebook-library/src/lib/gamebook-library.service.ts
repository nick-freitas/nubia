import { Injectable } from '@nestjs/common';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { GamebookLibraryDB } from './data';

@Injectable()
export class GamebookLibraryService {
  constructor(private gamebookApiModelService: GamebookApiModelService) {}

  async getLibraryGamebooks(userId: string): Promise<Array<Gamebook>> {
    const GamebookLibrary = GamebookLibraryDB.find(
      (lib) => lib.userId === userId
    );

    const gbIds = [];
    GamebookLibrary.gamebookIds.forEach((gbId) => {
      if (!gbIds.includes(gbId)) {
        gbIds.push(gbId);
      }
    });

    return Promise.all(
      gbIds.map((gbId) => this.gamebookApiModelService.getById(gbId))
    );
  }

  async checkOwnership(gamebookId: string, userId: string): Promise<boolean> {
    const gamebooklibrary = GamebookLibraryDB.find(
      (lib) => lib.userId === userId
    );

    const gamebook = gamebooklibrary?.gamebookIds.find(
      (gbIds) => gbIds === gamebookId
    );

    return !!gamebook;
  }
}
