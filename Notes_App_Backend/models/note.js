const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  // creating a schema for // NOTE:

  title: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    reqired: true
  },
  category: {
    type: String,
    required: false
  },
});

const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;
