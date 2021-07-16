import { Injectable } from '@nestjs/common';
import { Gamebook, PublicUser } from '@nubia/api-interfaces';
import { UserApiModelService } from '@nubia/user-api-model';
import { GamebookDB } from './data';

@Injectable()
export class GamebookApiModelService {
  constructor(private userApiModelService: UserApiModelService) {}

  public async getById(id: string): Promise<Gamebook | null> {
    return new Promise(async (res) => {
      const gb: Gamebook = GamebookDB.find((gb) => gb.id === id);
      if (!gb) return res(null);

      const author: PublicUser =
        await this.userApiModelService.getPublicUserInfo(gb.authorId);
      if (author) {
        gb.author = author;
      }

      return res(gb);
    });
  }

  public getByAuthorId(authorId: string): Promise<Gamebook[]> {
    return new Promise((res) => {
      const gb = GamebookDB.filter((gb) => gb.authorId === authorId);
      return res(gb);
    });
  }
}
