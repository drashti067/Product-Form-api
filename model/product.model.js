const mongoose = require("mongoose")

const schema = mongoose.Schema({
   
        id: {
            type: String,
            required: true,
            default: `CAT-${+new Date()}-${parseInt(Math.random() * 1000000 + 1000000)}`,
            unique: true,
            immutable: true
        },

    productName :{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    info: {
        type:String,
        required:true
    }
})  

module.exports = mongoose.model("products", schema)