import { Injectable } from '@nestjs/common';
import { Progression } from '@nubia/shared/api-interfaces';
import { ProgressionDB } from './data';

@Injectable()
export class ApiModelProgressionApiModelService {
  private async getProgressionsFromChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return ProgressionDB.filter((p) => p.sourceChapterId === chapterId);
  }

  private async getProgressionsToChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return ProgressionDB.filter((p) => p.destinationChapterId === chapterId);
  }
}
