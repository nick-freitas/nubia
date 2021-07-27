import { Injectable } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class GamebookApiModelService {
  constructor(
    private userApiModelService: UserApiModelService,
    private readonly apiDbClientService: ApiDbClientService
  ) {}

  public async getLibraryGamebooks(
    userId: string
  ): Promise<Array<Partial<Gamebook>>> {
    return this.apiDbClientService.gamebook.findMany({
      where: {
        OR: [{ ownedBy: { some: { id: userId } } }, { authorId: userId }],
      },
      select: {
        id: true,
        title: true,
        imageSrc: true,
        author: { select: { name: true } },
      },
    });
  }

  public async getById(id: string): Promise<Gamebook | null> {
    return this.apiDbClientService.gamebook.findUnique({
      where: { id: id },
      include: { author: { select: { name: true } } },
    });
  }

  public async getByAuthorId(
    authorId: string,
    populateWithAuthor = true
  ): Promise<Array<Gamebook>> {
    return this.apiDbClientService.gamebook.findMany({
      where: { authorId: authorId },
      include: { author: populateWithAuthor && { select: { name: true } } },
    });
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
