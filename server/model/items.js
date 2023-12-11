

const Mongoose = require("mongoose")

const ItemSchema = new Mongoose.Schema({
  title: {
    type: String,
   
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

module.exports = Mongoose.model("item", ItemSchema)
