import { Injectable, NotImplementedException } from '@nestjs/common';
import { ProgressionApiModelService } from '@nubia/api/data-models/progression';

@Injectable()
export class ApiEditorApiEditorApiProgressionService {
  constructor(private progressionApiModelService: ProgressionApiModelService) {}

  getProgressions(userId, gamebookId, sourceChapterId, destinationChapterId) {
    if (gamebookId)
      return this.progressionApiModelService.getByGamebookId(gamebookId);
    if (sourceChapterId)
      return this.progressionApiModelService.getProgressionsFromChapter(
        sourceChapterId
      );
    if (destinationChapterId)
      return this.progressionApiModelService.getProgressionsToChapter(
        destinationChapterId
      );
  }

  getById(userId, id) {
    return this.progressionApiModelService.getById(id);
  }

  partialUpdateProgression(userId, id, body) {
    throw new NotImplementedException();
  }

  fullUpdateProgression(userId, id, body) {
    throw new NotImplementedException();
  }

  createProgression(userId, body) {
    throw new NotImplementedException();
  }

  deleteProgressions(userId, id) {
    throw new NotImplementedException();
  }
}
