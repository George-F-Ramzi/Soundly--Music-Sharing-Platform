/*
  Warnings:

  - Added the required column `likes` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `song_file_url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Song` ADD COLUMN `likes` INTEGER NOT NULL,
    ADD COLUMN `song_file_url` VARCHAR(191) NOT NULL;
