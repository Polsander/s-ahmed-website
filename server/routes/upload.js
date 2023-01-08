const express = require('express');
const router = express.Router();


const multer = require('multer');
const {storage} = require('../cloudinary');
const uploadMulter = multer({storage});



const upload = require('../controllers/upload');

router.get('/image', upload.renderUpload);
router.post('/image', uploadMulter.single('file'), upload.uploadImage);
router.post('/thumbnail', uploadMulter.single('mainImage'), upload.uploadImageHeader);
router.post('/project', upload.uploadProject);

module.exports = router;