-- CreateIndex
CREATE FULLTEXT INDEX `Artist_username_idx` ON `Artist`(`username`);

-- CreateIndex
CREATE FULLTEXT INDEX `Song_song_name_idx` ON `Song`(`song_name`);
