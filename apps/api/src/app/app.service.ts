import { Injectable } from '@nestjs/common';
import { Gamebook, Message } from '@nubia/shared/api-interfaces';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';

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
