/*
  Warnings:

  - You are about to drop the column `been_following_by_me` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `liked_by_me` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Artist` DROP COLUMN `been_following_by_me`,
    MODIFY `followers` INTEGER NOT NULL DEFAULT 0,
    MODIFY `following` INTEGER NOT NULL DEFAULT 0,
    MODIFY `songs_uploaded_number` INTEGER NOT NULL DEFAULT 0,
    MODIFY `photo_url` VARCHAR(191) NOT NULL DEFAULT 'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png';

-- AlterTable
ALTER TABLE `Song` DROP COLUMN `liked_by_me`;
