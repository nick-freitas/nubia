/*
  Warnings:

  - You are about to drop the column `chapterId` on the `ReadingSession` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReadingSession" DROP CONSTRAINT "ReadingSession_chapterId_fkey";

-- AlterTable
ALTER TABLE "Progression" ADD COLUMN     "readingSessionId" TEXT;

-- AlterTable
ALTER TABLE "ReadingSession" DROP COLUMN "chapterId";

-- AddForeignKey
ALTER TABLE "Progression" ADD FOREIGN KEY ("readingSessionId") REFERENCES "ReadingSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
