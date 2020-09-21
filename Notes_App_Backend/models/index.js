const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes-app", {
  // connecting to the mongo database name: "notes-app" locally
  keepAlive: true, // keep the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.set("debug", true); // Enabled debigging info
mongoose.Promise = Promise // setting mongoos's promise to use Node's promise.
module.exports.Note = require("./note");
