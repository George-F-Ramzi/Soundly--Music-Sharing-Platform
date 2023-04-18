"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_1 = require("cloudinary");
var conifg = {
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    cloud_name: process.env.CLOUD_NAME,
};
cloudinary_1.v2.config(conifg);
exports.default = cloudinary_1.v2;
