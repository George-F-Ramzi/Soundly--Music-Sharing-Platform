"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
var multer_1 = __importDefault(require("multer"));
var cloudinary_1 = __importDefault(require("./cloudinary"));
var storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: { resource_type: "auto" },
});
var file_handler = (0, multer_1.default)({ storage: storage });
exports.default = file_handler;
