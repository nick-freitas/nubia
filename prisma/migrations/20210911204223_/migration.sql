/*
  Warnings:

  - Added the required column `gamebookId` to the `Progression` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Progression" ADD COLUMN     "gamebookId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Progression" ADD FOREIGN KEY ("gamebookId") REFERENCES "Gamebook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
