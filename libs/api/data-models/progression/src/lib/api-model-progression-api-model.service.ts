import { Injectable } from '@nestjs/common';
import { Progression } from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class ProgressionApiModelService {
  constructor(private readonly apiDbClientService: ApiDbClientService) {}

  public async getById(id: string): Promise<Progression | null> {
    return this.apiDbClientService.progression.findUnique({
      where: { id: id },
    });
  }

  public async getProgressionsFromChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return this.apiDbClientService.progression.findMany({
      where: { sourceChapterId: chapterId },
    });
  }

  public async getProgressionsToChapter(
    chapterId: string
  ): Promise<Array<Progression>> {
    return this.apiDbClientService.progression.findMany({
      where: { destinationChapterId: chapterId },
    });
  }
}
