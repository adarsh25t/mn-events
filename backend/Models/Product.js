const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"product must have a title"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"product must have a price"],
    },
    category:{
        type: String
    },
    description:{
        type:String,
        trim:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    productitems:String,
    image1:{
        data: Buffer,
        contentType: String
    },
    image2:{
        data: Buffer,
        contentType: String
    },
    image3:{
        data: Buffer,
        contentType: String
    },
    image4:{
        data: Buffer,
        contentType: String
    },
    image5:{
        data: Buffer,
        contentType: String
    },
    image6:{
        data: Buffer,
        contentType: String
    }
    
})

const Product = mongoose.model("Products",ProductSchema);
module.exports = Product;
