/*
  Warnings:

  - The primary key for the `Follower` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Follower` table. All the data in the column will be lost.
  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Like` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Follower` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`artist_id`, `fan_id`);

-- AlterTable
ALTER TABLE `Like` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`song_id`, `fan_id`);
