/*
  Warnings:

  - You are about to drop the column `gamebookdId` on the `Chapter` table. All the data in the column will be lost.
  - Added the required column `gamebookId` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_gamebookdId_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "gamebookdId",
ADD COLUMN     "gamebookId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Chapter" ADD FOREIGN KEY ("gamebookId") REFERENCES "Gamebook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
