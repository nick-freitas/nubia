import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import {
  Choice,
  ReadingSession,
  Progression,
} from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';
import { ProgressionApiModelService } from '@nubia/api/data-models/progression';

@Injectable()
export class ReadingSessionApiModelService {
  constructor(
    private readonly apiDbClientService: ApiDbClientService,
    private readonly progressionApiModelService: ProgressionApiModelService
  ) {}

  public async makeProgressionChoice(
    userId: string,
    gamebookId: string,
    progressionId: string
  ): Promise<ReadingSession | null> {
    const readingSession: ReadingSession = await this.getReadingSession(
      userId,
      gamebookId
    );

    if (!readingSession) return;

    const progression: Progression =
      await this.progressionApiModelService.getById(progressionId);

    const userChoice: Choice = {
      progressionTakenId: progression.id,
      createdAt: new Date(),
      previousChapterId: progression.sourceChapterId, //source
      chapterId: progression.destinationChapterId, //destination
    };

    readingSession.choicesObj.unshift(userChoice);
    readingSession.choices = JSON.stringify(readingSession.choicesObj);

    await this.apiDbClientService.readingSession.update({
      where: { id: readingSession.id },
      data: { choices: readingSession.choices },
    });

    return readingSession;
  }

  public async previousChoice(
    userId: string,
    gamebookId: string
  ): Promise<ReadingSession | null> {
    const readingSession: ReadingSession = await this.getReadingSession(
      userId,
      gamebookId
    );

    if (!readingSession) return;

    readingSession.choicesObj.shift();
    readingSession.choices = JSON.stringify(readingSession.choicesObj);

    await this.apiDbClientService.readingSession.update({
      where: { id: readingSession.id },
      data: { choices: readingSession.choices },
    });

    return readingSession;
  }

  public async resetChoices(
    userId: string,
    gamebookId: string
  ): Promise<ReadingSession | null> {
    const readingSession: ReadingSession = await this.getReadingSession(
      userId,
      gamebookId
    );

    readingSession.choicesObj = [];
    readingSession.choices = JSON.stringify([]);

    await this.apiDbClientService.readingSession.update({
      where: { id: readingSession.id },
      data: { choices: readingSession.choices },
    });

    return readingSession;
  }

  public async getReadingSession(
    userId: string,
    gamebookId: string
  ): Promise<ReadingSession> {
    const readingSession: ReadingSession =
      await this.apiDbClientService.readingSession.findFirst({
        where: { AND: [{ userId: userId }, { gamebookId: gamebookId }] },
      });

    if (readingSession) {
      readingSession.choicesObj = JSON.parse(readingSession.choices);
      return readingSession;
    }

    return this.createInitialReadingSession(userId, gamebookId);
  }

  private async createInitialReadingSession(
    userId: string,
    gamebookId: string
  ): Promise<ReadingSession> {
    const initReadingSession: ReadingSession = {
      id: uuidv4(),
      userId: userId,
      gamebookId: gamebookId,
      choices: JSON.stringify([]),
    };

    await this.apiDbClientService.readingSession.create({
      data: initReadingSession,
    });
    return { ...initReadingSession, choicesObj: [] };
  }
}
