import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { ChapterApiModelService } from '@nubia/api/data-models/chapter';

@Injectable()
export class ApiEditorApiEditorApiChapterService {
  constructor(private chapterApiModelService: ChapterApiModelService) {}

  getChapters(userId, gamebookId, startingChapter) {
    if (!gamebookId) throw new BadRequestException('Missing ?gamebookId');

    if (startingChapter) {
      return this.chapterApiModelService.getStartingChapter(gamebookId, userId);
    }

    return this.chapterApiModelService.getByGamebookId(gamebookId, userId);
  }

  getById(userId, id) {
    this.chapterApiModelService.getById(id, userId);
  }

  partialUpdateChapter(userId, id, body) {
    throw new NotImplementedException();
  }

  fullUpdateChapter(userId, id, body) {
    throw new NotImplementedException();
  }

  createChapter(userId, body) {
    throw new NotImplementedException();
  }

  deleteChapters(userId, id) {
    throw new NotImplementedException();
  }
}
