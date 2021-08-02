/*
  Warnings:

  - Added the required column `price` to the `Gamebook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gamebook" ADD COLUMN     "price" DECIMAL(20,2) NOT NULL;
