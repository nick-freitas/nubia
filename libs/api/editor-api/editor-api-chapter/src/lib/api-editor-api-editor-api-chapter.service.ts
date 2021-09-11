import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { ChapterApiModelService } from '@nubia/api/data-models/chapter';
import { Gamebook, Chapter } from '@nubia/shared/api-interfaces';

@Injectable()
export class ApiEditorApiEditorApiChapterService {
  constructor(private chapterApiModelService: ChapterApiModelService) {}

  async getChapters(
    userId,
    gamebookId,
    startingChapter
  ): Promise<Array<Chapter>> {
    if (!gamebookId) throw new BadRequestException('Missing ?gamebookId');

    if (startingChapter) {
      const chapter = await this.chapterApiModelService.getStartingChapter(
        gamebookId,
        userId
      );
      return [chapter];
    }

    return this.chapterApiModelService.getByGamebookId(gamebookId, userId);
  }

  async getById(userId, id): Promise<Chapter> {
    return this.chapterApiModelService.getById(id, userId);
  }

  partialUpdateChapter(userId, id, body): Promise<Chapter> {
    throw new NotImplementedException();
  }

  fullUpdateChapter(userId, id, body): Promise<Chapter> {
    throw new NotImplementedException();
  }

  createChapter(userId, body): Promise<Chapter> {
    throw new NotImplementedException();
  }

  deleteChapters(userId, id): Promise<Chapter> {
    throw new NotImplementedException();
  }
}
