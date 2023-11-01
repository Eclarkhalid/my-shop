import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  price: {type: Number, required: true},
  details: {type:String},
  brand: {type:String},
  colors: {type:String},
  sizes: {type:String},
  gender: {type:String},
  images: [{type: String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
});

export const Product = models.Product || model('Product', ProductSchema);