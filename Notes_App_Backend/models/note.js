const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  // creating a schema for // NOTE:

  title: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type:String,
    unique: false,
    reqired: true
  },
  category: {
    type: String,
    unique: false,
    required: false
  },
});

const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;
