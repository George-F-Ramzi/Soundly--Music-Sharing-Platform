import { ConfigOptions, v2 as cloudinary } from "cloudinary";

let conifg: ConfigOptions = {
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  cloud_name: process.env.CLOUD_NAME,
};

cloudinary.config(conifg);

export default cloudinary;
