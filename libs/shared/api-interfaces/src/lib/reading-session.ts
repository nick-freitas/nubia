import { ReadingSession as ReadingSessionModel } from '@prisma/client';

export interface ReadingSession extends ReadingSessionModel {
  id: string;
}
