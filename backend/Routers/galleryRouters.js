const express = require('express');
const { uploadGalleryImage, getGalleryImages, upload, deleteImage } = require('../Controllers/galleryControllers');


const galleryRouter = express.Router();

galleryRouter
    .route('/')
    .get(getGalleryImages)
    .post(upload.single('image'),uploadGalleryImage)

galleryRouter
    .route('/:id')
    .delete(deleteImage)

module.exports = galleryRouter;