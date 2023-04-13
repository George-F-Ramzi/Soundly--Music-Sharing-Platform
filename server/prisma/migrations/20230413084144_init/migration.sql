-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `song_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_song_id_fkey` FOREIGN KEY (`song_id`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
