const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./models/");

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})
