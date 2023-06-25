const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const productRouter = require('./Routers/productRouters');
const galleryRouter = require('./Routers/galleryRouters');
const { generatePdf } = require('./Controllers/generatePdfController');

const app = express();


app.use(cors());
app.use(express.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/uploads', express.static('uploads'));

app.use('/api/v1/product',productRouter)
app.use('/api/v1/gallery',galleryRouter)
app.use('/api/v1/sendEmail',generatePdf)

module.exports = app;