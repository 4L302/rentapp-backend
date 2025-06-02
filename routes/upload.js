const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const router = express.Router();
const streamifier = require('streamifier');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'Nessun file caricato' });
  }

  const stream = cloudinary.uploader.upload_stream(
    { folder: 'RentApp' }, // cartella su Cloudinary
    (error, result) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json({ url: result.secure_url });
    }
  );

  streamifier.createReadStream(file.buffer).pipe(stream);
});

module.exports = router;
