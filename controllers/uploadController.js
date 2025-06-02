const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path); // elimina il file locale
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Errore upload:', error);
    res.status(500).json({ error: 'Upload fallito' });
  }
};

module.exports = { uploadImage };
