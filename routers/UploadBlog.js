const express = require("express");
const router = express.Router();
require("dotenv").config()
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});
module.exports = cloudinary;
// const uploadCloud = require("../middlewares/uploadCloud")
// const multer = require("multer");
// const path  = require("path")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "src/public")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({storage: storage})
// router.post("/", uploadCloud.array("images"), (req, res) => {
//     res.send("Image upload")
// })
router.post("/", async (req, res) => {
    const image = await cloudinary.uploader.upload(img,
        { 
            upload_preset: 'cluekvnq',
            allowed_formats : ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
        }, 
    );
    console.log(image)
})

module.exports = router;