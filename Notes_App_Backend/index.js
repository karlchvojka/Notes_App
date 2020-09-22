const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
const db = require("./models/");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json())

function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/notes", async (req, res, next) => {
  try {
    const notes = await db.Notes.find({})
    return success(res, notes)
  } catch (err) {
    next({ status: 400, messages: "Failed to get Notes"})
  }
})

app.post("/notes", async (req, res, next) => {
  try {
    const note = await db.Notes.create(req.body)
    return success(res, note)
  } catch (err) {
    next({ status: 400, message: "Failed to create note"})
  }
})

app.put("/notes/:id", async (req, res, next) => {
  try {
    const note = await db.Notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      }
    )
    return success(res, note)
  } catch (err) {
    next({ status: 400, message: "Failed to update note"})
  }
})

app.delete("/notes/:id", async (req, res, next) => {
  try {
    await db.Notes.findByIdAndRemove(req.params.id)
    return success(res, "Note Deleted")
  } catch (err) {
    next({ status: 400, message: "Failed to delete note"})
  }
})

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request"
  })
})


app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})
