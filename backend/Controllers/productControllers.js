const Product = require("../Models/Product")
const multer = require('multer');
const {v4 : uuidv4} = require('uuid')
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
  
// UPLOAD DIFFERENT IMAGES
const upload = multer({ storage }).fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },    
    { name: 'image3', maxCount: 1 },    
    { name: 'image4', maxCount: 1 },    
    { name: 'image5', maxCount: 1 },    
    { name: 'image6', maxCount: 1 },    
  ]);


//  CREATE PRODUCT FUNCTION 
exports.createProduct = async (req,res,next) => {
    try {
    
        // UPLOAD IMAGES 
        upload(req, res, async (err) => {
            if (err) {
              console.error(err);
              return res.status(500).send('An error occurred while uploading the files.');
            }
            
            // SETUP UPLOAD JSON 
            let obj = {
                'title': req.body.title,
                'price': req.body.price,
                'category': req.body.category,
                'description': req.body.description,
                'productitems': req.body.productitems,
                'image1': req.files['image1'] && {
                    data: fs.readFileSync('uploads/' + req.files['image1'][0].filename),
                    contentType: 'image/png'
                },
                'image2': req.files['image2'] && {
                    data: fs.readFileSync('uploads/' + req.files['image2'][0].filename),
                    contentType: 'image/png'
                },
                'image3': req.files['image3'] && {
                    data: fs.readFileSync('uploads/' + req.files['image3'][0].filename),
                    contentType: 'image/png'
                },
                'image4': req.files['image4'] && {
                    data: fs.readFileSync('uploads/' + req.files['image4'][0].filename),
                    contentType: 'image/png'
                },
                'image5': req.files['image5'] && {
                    data: fs.readFileSync('uploads/' + req.files['image5'][0].filename),
                    contentType: 'image/png'
                },
                'image6': req.files['image6'] && {
                    data: fs.readFileSync('uploads/' + req.files['image6'][0].filename),
                    contentType: 'image/png'
                }
            }
            
            // UPLOAD DATA TO THE DATABASE
            let newProduct = await Product.create(obj);
            console.log(newProduct);
            res.status(201).json({
                status:"success",
                product:newProduct
            })
        })

        
    } catch (error) {
        res.status(400).json({
            status:'faild',
            message:error
        })
    }
}

// GET ALL PRODUCTS
exports.getAllProducts = async (req,res,next) => {
    try {
        let products = await Product.find();

        res.status(200).json({
            status:'success',
            result:products.length,
            data:{
                products
            }
        })
        
    } catch (error) {
        res.status(400).json({
            status:'faild',
            message:error
        })
    }
}

// GET ONE PRODUCT 
exports.getProduct = async (req,res,next) => {
    try {

        let product = await Product.findById(req.params.id);

        res.status(200).json({
            status:"success",
            data:product
        })
        
    } catch (error) {
        res.status(400).json({
            status:'faild',
            message:error
        })
    }
}

// UPDATE PRODUCT DETAILS
exports.updateProduct = async (req,res) => {
    try {
        
        upload(req, res, async (err) => {
            
            if (err) {
              console.error('err',err);
              return res.status(500).send('An error occurred while uploading the files.');
            }
            
            let obj = {
                'title': req.body.title && req.body.title,
                'price': req.body.price && req.body.price,
                'category': req.body.category,
                'description': req.body.description && req.body.description,
                'productitems': req.body.productitems && req.body.productitems,
                'image1': req.files['image1'] && {
                    data: fs.readFileSync('uploads/' + req.files['image1'][0].filename),
                    contentType: 'image/png'
                },
                'image2': req.files['image2'] && {
                    data: fs.readFileSync('uploads/' + req.files['image2'][0].filename),
                    contentType: 'image/png'
                },
                'image3': req.files['image3'] && {
                    data: fs.readFileSync('uploads/' + req.files['image3'][0].filename),
                    contentType: 'image/png'
                },
                'image4': req.files['image4'] && {
                    data: fs.readFileSync('uploads/' + req.files['image4'][0].filename),
                    contentType: 'image/png'
                },
                'image5': req.files['image5'] && {
                    data: fs.readFileSync('uploads/' + req.files['image5'][0].filename),
                    contentType: 'image/png'
                },
                'image6': req.files['image6'] && {
                    data: fs.readFileSync('uploads/' + req.files['image6'][0].filename),
                    contentType: 'image/png'
                }
            }
            
            let updateproduct = await Product.findByIdAndUpdate(req.params.id,obj,{
                new: true,
                runValidators: true
            })
    
            res.status(201).json({
                status:"success",
                product:updateproduct
            })
        })

    } catch (error) {
        res.status(400).json({
            status:'faild',
            message:error
        })
    }
}

// DELETE PRODUCT
exports.deleteProduct =async (req,res,next) => {
    try {

        let product = await Product.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            message: "Product is deleted"
        })

        
    } catch (error) {
        res.status(404).json({
            status:'faild',
            message:error
        })
    }
}