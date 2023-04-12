-- AlterTable
ALTER TABLE `Artist` MODIFY `followers` INTEGER NULL DEFAULT 0,
    MODIFY `following` INTEGER NULL DEFAULT 0,
    MODIFY `songs_uploaded_number` INTEGER NULL DEFAULT 0,
    MODIFY `photo_url` VARCHAR(191) NULL DEFAULT 'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png';
