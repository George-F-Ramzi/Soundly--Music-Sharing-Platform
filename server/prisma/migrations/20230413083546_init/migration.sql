/*
  Warnings:

  - You are about to drop the column `artist_id` on the `Like` table. All the data in the column will be lost.
  - Added the required column `fan_id` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_artist_id_fkey`;

-- AlterTable
ALTER TABLE `Like` DROP COLUMN `artist_id`,
    ADD COLUMN `fan_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_fan_id_fkey` FOREIGN KEY (`fan_id`) REFERENCES `Artist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
