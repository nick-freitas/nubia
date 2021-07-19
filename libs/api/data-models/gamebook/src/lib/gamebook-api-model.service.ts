import { Injectable } from '@nestjs/common';
import { Gamebook, PublicUser } from '@nubia/shared/api-interfaces';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { GamebookDB } from './data';

@Injectable()
export class GamebookApiModelService {
  constructor(private userApiModelService: UserApiModelService) {}

  public async getById(id: string): Promise<Gamebook | null> {
    const gb: Gamebook = GamebookDB.find((gb) => gb.id === id);
    if (!gb) return null;

    const author: PublicUser = await this.userApiModelService.getPublicUserInfo(
      gb.authorId
    );
    if (author) {
      gb.author = author;
    }

    return gb;
  }

  public async getByAuthorId(authorId: string): Promise<Gamebook[]> {
    let gb = GamebookDB.filter((gb) => gb.authorId === authorId);
    const authorIds = [];
    gb.forEach((gb) => {
      if (!authorIds.includes(gb.authorId)) {
        authorIds.push(gb.authorId);
      }
    });

    console.log(authorIds);

    const authors = await Promise.all(
      authorIds.map((aid) => this.userApiModelService.getPublicUserInfo(aid))
    );

    gb = gb.map((gb) => ({
      ...gb,
      author: authors.find((a) => a.id === gb.authorId),
    }));

    console.log(gb);
    return gb;
  }
}
