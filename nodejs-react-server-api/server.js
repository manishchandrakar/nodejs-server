// nodejs-server/server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const Product = require("./modules/Item");
const routes = require("./routes/items.js");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
