/*
  Warnings:

  - Added the required column `choices` to the `ReadingSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Progression" DROP CONSTRAINT "Progression_readingSessionId_fkey";

-- AlterTable
ALTER TABLE "ReadingSession" ADD COLUMN     "choices" TEXT NOT NULL;
