import {
  Injectable,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { GamebookApiModelService } from '@nubia/api/data-models/gamebook';

@Injectable()
export class ApiEditorApiEditorApiGamebookService {
  constructor(private gamebookApiModelService: GamebookApiModelService) {}

  getGamebooks(userId) {
    return this.gamebookApiModelService.getByAuthorId(userId);
  }

  async getById(userId, id) {
    const gamebook = await this.gamebookApiModelService.getById(id);
    if (gamebook.authorId === userId) return gamebook;
    throw new UnauthorizedException();
  }

  partialUpdateGamebook(userId, id, body) {
    throw new NotImplementedException();
  }

  fullUpdateGamebook(userId, id, body) {
    throw new NotImplementedException();
  }

  createGamebook(userId, body) {
    throw new NotImplementedException();
  }

  deleteGamebooks(userId, id) {
    throw new NotImplementedException();
  }
}
