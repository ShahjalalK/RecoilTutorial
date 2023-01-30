import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true
    },
    mediaUrl : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    }
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)