const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    image:{
        data: Buffer,
        contentType: String
    }
})

const Gallery = mongoose.model('Gallery',gallerySchema);
module.exports = Gallery;