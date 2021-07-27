import { ReadingSession } from '@prisma/client';
import { Choice } from '../../libs/shared/api-interfaces/src/lib/choice';

const choice: Choice[] = [
  {
    chapterId: '2',
    progressionTakenId: '1',
    createdAt: new Date('07/25/2021'),
    previousChapterId: '1',
  },
  {
    chapterId: '1',
    progressionTakenId: null,
    createdAt: new Date('07/24/2021'),
    previousChapterId: null,
  },
];

export const readingSessions: ReadingSession[] = [
  {
    id: '1',
    gamebookId: '1',
    userId: '1',
    choices: JSON.stringify(choice),
  },
];
