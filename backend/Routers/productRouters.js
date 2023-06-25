const express = require('express');
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../Controllers/productControllers');
const { upload } = require('../Controllers/galleryControllers');

const productRouter = express.Router();

productRouter
    .route('/')
    .get(getAllProducts)
    .post(createProduct)

productRouter
    .route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = productRouter;