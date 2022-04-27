const express = require("express");
const app = express();
const path = require("path");
const db = require('../backend/config/connection');
const mongoose = require("mongoose");





// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//   // Set static folder
//   app.use(express.static("client/build"));

//   // index.html for all page routes
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

db.once('open', () => {
    console.log('Mongoose DB connection established.')
  });


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
});