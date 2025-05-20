const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "First name must 3 characters long"],
    }
  },
  email : {
    type: String,
    required: true,
    unique: true,
    minlength:[5, "Please enter a valid email"]
  },
  password :{
    type:String,
    required: true,
    select: false
  },
  socketId: {
    
  }
});

userSchema.methods.genrateAuthToken = function () {
  const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
  return token;
}

userSchema.methods.comparePassword = async () => {
  return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password,10);
}

const usermodel = mongoose.model("User", userSchema);

module.exports= usermodel
