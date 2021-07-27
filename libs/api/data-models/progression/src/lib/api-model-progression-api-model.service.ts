import { Injectable } from '@nestjs/common';
import { Progression } from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class ApiModelProgressionApiModelService {
  constructor(private readonly apiDbClientService: ApiDbClientService) {}
  private async getProgressionsFromChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return this.apiDbClientService.progression.findMany({
      where: { sourceChapterId: chapterId },
    });
  }

  private async getProgressionsToChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return this.apiDbClientService.progression.findMany({
      where: { destinationChapterId: chapterId },
    });
  }
}
