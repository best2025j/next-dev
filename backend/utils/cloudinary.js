const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const cloudinaryUploadImg = async (file) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(file, options);
    return result.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = cloudinaryUploadImg;