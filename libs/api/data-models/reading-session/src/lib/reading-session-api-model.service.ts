import { Injectable } from '@nestjs/common';
import { ReadingSession } from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReadingSessionApiModelService {
  constructor(private readonly apiDbClientService: ApiDbClientService) {}

  public async getReadingSession(
    userId: string,
    gamebookId: string
  ): Promise<ReadingSession> {
    const readingSession: ReadingSession =
      await this.apiDbClientService.readingSession.findFirst({
        where: { AND: [{ userId: userId }, { gamebookId: gamebookId }] },
      });

    if (readingSession) return readingSession;
    return this.createInitialReadingSession(userId, gamebookId);
  }

  private createInitialReadingSession(
    userId: string,
    gamebookId: string
  ): ReadingSession {
    return {
      id: uuidv4(),
      userId: userId,
      gamebookId: gamebookId,
      choices: JSON.stringify([]),
    };
  }
}
