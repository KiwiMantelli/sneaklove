const cloudinary = require("cloudinary").v2; // Don't forget the .v2 !
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Configure cloudinary to connect to your cloudinary account.
cloudinary.config({
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sneakers",
    allowedFormats: ["jpg", "png"], // Specify the allowed formats for your uploaded files
    format: async (req, file) => {
     
      return "jpeg";
    },
  
  },
});

const uploader = multer({ storage: storage });

module.exports = uploader;