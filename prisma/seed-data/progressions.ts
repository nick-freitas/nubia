import { Progression } from '@prisma/client';
import { chapters } from './chapters';

const _progressions: {
  sourceChapterId: string;
  destinationChapterId: string;
  gamebookId: string;
}[] = [];

for (let i = 0; i < chapters.length; i++) {
  const current = chapters[i];
  const next =
    i < chapters.length - 1 &&
    chapters[i].gamebookId === chapters[i + 1].gamebookId &&
    chapters[i + 1];

  if (next) {
    _progressions.push({
      sourceChapterId: current.id,
      destinationChapterId: next.id,
      gamebookId: current.gamebookId,
    });
  }
}

export const progressions: Progression[] = _progressions
  .map((p, idx) => ({ ...p, id: String(idx) }))
  .map((p) => ({
    ...p,
    name: `Continue N${p.id}`,
    descriptor: `Continue D${p.id}`,
  }));

// https://blog.reedsy.com/book-cover-art/
