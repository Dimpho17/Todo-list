

const Mongoose = require("mongoose")

const ItemSchema = new Mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    required: true,
  },
  description: {
    type: String,
    minlength: 6,
    required: true,
  }
})

module.exports = Mongoose.model("item", ItemSchema)
