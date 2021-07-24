import { Injectable, NotFoundException } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { GamebookDB } from './data';

@Injectable()
export class GamebookApiModelService {
  constructor(private userApiModelService: UserApiModelService) {}

  public async getLibraryGamebooks(userId: string): Promise<Array<Gamebook>> {
    const libraryGamebookIds: string[] =
      await this.userApiModelService.getGamebookIds(userId);

    const authoredGamebookIds: string[] = (
      await this.getByAuthorId(userId, false)
    ).map((gb) => gb.id);

    const libraryGamebooks = GamebookDB.filter(
      (gb) =>
        libraryGamebookIds.includes(gb.id) ||
        authoredGamebookIds.includes(gb.id)
    );

    return this.gamebooksPopulatedWithAuthor(libraryGamebooks);
  }

  public async getById(id: string): Promise<Gamebook | null> {
    const gb: Gamebook = GamebookDB.find((gb) => gb.id === id);
    if (!gb) throw new NotFoundException();

    gb.author = await this.userApiModelService.getPublicUserInfo(gb.authorId);
    return gb;
  }

  public async getByAuthorId(
    authorId: string,
    populateWithAuthor = true
  ): Promise<Array<Gamebook>> {
    const gamebooks = GamebookDB.filter((gb) => gb.authorId === authorId);
    if (!gamebooks) throw new NotFoundException();

    if (populateWithAuthor) {
      return this.gamebooksPopulatedWithAuthor(gamebooks);
    }

    return gamebooks;
  }

  private async gamebooksPopulatedWithAuthor(
    gamebooks: Array<Gamebook>
  ): Promise<Array<Gamebook>> {
    const authorIds = [];
    gamebooks.forEach((gb) => {
      if (!authorIds.includes(gb.authorId)) {
        authorIds.push(gb.authorId);
      }
    });

    const authors = await Promise.all(
      authorIds.map((aid) => this.userApiModelService.getPublicUserInfo(aid))
    );

    return gamebooks.map((gb) => ({
      ...gb,
      author: authors.find((a) => a.id === gb.authorId),
    }));
  }

  public async userOwnsOrAuthoredTheGamebook(
    gamebookId: string,
    userId: string
  ): Promise<boolean> {
    if (await this.userApiModelService.getIsOwnedGamebok(userId, gamebookId)) {
      return true;
    }

    const authorId = (await this.getById(gamebookId)).authorId;
    if (authorId === userId) {
      return true;
    }

    return false;
  }
}
