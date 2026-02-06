const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema(
  {
    name: {
         type: String, 
         required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, required: true
    },
    brand: { type: String, required: true },
    price: { type: Number, default: 0 },
    isInStock: { type: Boolean, default: true },
    specifications: {
      type: Map,
      of: String,
    },

    image: {
      url: String,
      public_id: String,
    },


  },
  { timestamps: true }
)

const PRODUCT = mongoose.model("Product", productSchema)
module.exports = PRODUCT