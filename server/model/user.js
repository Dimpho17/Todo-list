const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  email: {
    type: String,
  },
});
const User = Mongoose.model("user", UserSchema);
module.exports = User;
