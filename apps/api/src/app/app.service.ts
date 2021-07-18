import { Injectable } from '@nestjs/common';
import { Gamebook, Message } from '@nubia/api-interfaces';
import { GamebookApiModelService } from '@nubia/api-model/gamebook-api-model';

@Injectable()
export class AppService {
  constructor(private gamebookApiModelService: GamebookApiModelService) {}
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  public async getLibraryGamebook(authorId: string): Promise<Array<Gamebook>> {
    return this.gamebookApiModelService.getByAuthorId(authorId);
  }
}
