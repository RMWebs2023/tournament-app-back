const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connection = require("./database.js");
const router = require("./routes/index.routes.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", router);

app.listen(PORT, () => {
  connection();
  console.log(`Server is listening on ${PORT}`);
});
