import { PrismaClient } from '@prisma/client';
import { users } from './seed-data/users';
import { gamebooks } from './seed-data/gamebooks';
import { chapters } from './seed-data/chapters';
import { progressions } from './seed-data/progressions';
import { ownedGamebooks } from './seed-data/owned-gamebook';
import { readingSessions } from './seed-data/reading-session';

const prisma = new PrismaClient();

export async function main() {
  await prisma.$connect();

  await Promise.all(initialData());
  await Promise.all(manyToMany());
}

function initialData() {
  const data = [];

  users.forEach((sd) =>
    data.push(
      prisma.user.create({
        data: sd,
      })
    )
  );

  gamebooks.forEach((sd) =>
    data.push(
      prisma.gamebook.create({
        data: sd,
      })
    )
  );

  chapters.forEach((sd) =>
    data.push(
      prisma.chapter.create({
        data: sd,
      })
    )
  );

  progressions.forEach((sd) =>
    data.push(
      prisma.progression.create({
        data: sd,
      })
    )
  );

  readingSessions.forEach((sd) =>
    data.push(
      prisma.readingSession.create({
        data: sd,
      })
    )
  );

  return data;
}

function manyToMany() {
  return ownedGamebooks.map((og) =>
    prisma.user.update({
      where: { id: og.userId },
      data: {
        ownedGamebooks: { connect: { id: og.gamebookId } },
      },
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
    process.exit(0);
  });
