import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  productImages: {
    type: String,

  },
  price:{
    type:Number,
    required:true,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  address:{
    type:String,
    requires:true
  },
  status:{
    type:String,
    enum:["delivered","pending","cqncelled"], //enum =  choices means that u can only select one of them only
    default:"pending"
  }
},{timestamps:true});

export const Product = mongoose.model(productSchema);
