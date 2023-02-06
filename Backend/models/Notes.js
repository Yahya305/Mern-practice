const mongoos = require("mongoose")
const { Schema } = mongoose;

const notesSchema = new Schema({
    title:  {
      type:String,
      required: true
  },
  author:  {
      type:String,
  },
  description :{
    type:String,
  },
  tags:  {
      type:String,
      required: true,
      default:"general"
  },
  date:  {
      type:Date,
      default: Date.now,
  },
  });
  module.exports=mongoose.model("notes",notesSchema)