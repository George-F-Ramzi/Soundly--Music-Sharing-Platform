import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  // @ts-ignore
  params: { resource_type: "auto" },
});

const file_handler = multer({ storage });

export default file_handler;
