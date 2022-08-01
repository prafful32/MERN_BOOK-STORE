const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://admin:iBiZ97JP8nU8WsLF@cluster0.kt1ejyr.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
// iBiZ97JP8nU8WsLF
