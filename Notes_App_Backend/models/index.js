const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/notes", {
    // connecting to the mongo database name: "notes-app" locally
    keepAlive: true, // keep the connection alive
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).catch(err => console.log("conn error: ", err.reason));

mongoose.set("debug", true); // Enabled debigging info
mongoose.Promise = Promise // setting mongoos's promise to use Node's promise.
module.exports.Notes = require("./note");
