import { ReadingSession as ReadingSessionModel } from '@prisma/client';
import { Choice } from './choice';

export interface ReadingSession extends ReadingSessionModel {
  id: string;
  choicesObj?: Choice[];
}
