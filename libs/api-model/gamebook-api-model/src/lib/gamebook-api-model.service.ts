import { Injectable } from '@nestjs/common';
import { Gamebook, PublicUser } from '@nubia/api-interfaces';
import { UserApiModelService } from '@nubia/api-model/user-api-model';
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
    const gb = GamebookDB.filter((gb) => gb.authorId === authorId);
    return gb;
  }
}
