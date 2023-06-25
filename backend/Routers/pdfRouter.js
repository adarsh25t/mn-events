const express = require('express');
const { generatePdf } = require('../Controllers/generatePdfController');

const pdfRouter = express.Router();

pdfRouter
    .route('/')
    .post(generatePdf);


module.exports = pdfRouter;