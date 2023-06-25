const multer = require("multer");
const Gallery = require("../Models/Gallery");
const {v4 : uuidv4} = require('uuid');
const fs = require('fs');

// UPLOAD IMAGE USING MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = uuidv4()
      cb(null,uniqueSuffix );
    }
});

  
exports.upload = multer({ storage:storage });

// UPLOAD GALLERY IMAGE FUNCTION
exports.uploadGalleryImage = async (req, res, next) => {
    try {
      const buffer = fs.readFileSync('uploads/' + req.file.filename)
  
      const image = new Gallery({
        image: {
          data: buffer,
          contentType: 'image/png'
        }
      });
  
      let result = await image.save();
  
      res.status(201).json({
        status: 'success',
        result
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.message
      });
    }
  };

// GET ALL GALLERY IMAGES
exports.getGalleryImages = async (req,res) => {
    try {

        let images = await Gallery.find();

        res.status(200).json({
            status:'success',
            result:images.length,
            data:{
                images
            }
        })
        
    } catch (error) {
        res.status(404),json({
            status:"fail",
            message:error.message
        })
    }
}

// DELETE GALLERY IMAGE
exports.deleteImage = async (req,res) => {
    try {

        await Gallery.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            message: "image is deleted"
        })
        
    } catch (error) {
        res.status(400),json({
            status:"fail",
            message:error.message
        })
    }
}