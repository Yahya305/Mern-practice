const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  firstName:  {
    type:String,
    required: true
},
lastName:  {
    type:String,
    required: true
},
email:  {
    type:String,
    required: true,
    unique:true
},
password:  {
    type:String,
    required: true,
},
});
module.exports=mongoose.model("user",userSchema)

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("User", UserSchema);