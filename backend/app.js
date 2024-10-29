const express = require("express");
const bodyParser = require("body-parser");
require("./db");

const app = express();

app.use(bodyParser.json());

const easyRoutes = require("./routes/easyRoutes");
const mediumRoutes = require("./routes/mediumRoutes");
const hardRoutes = require("./routes/hardRoutes");

app.use("/api/easy-scores", easyRoutes);
app.use("/api/top-easy-scores", easyRoutes);

app.use("/api/medium-scores", mediumRoutes);
app.use("/api/top-medium-scores", mediumRoutes);

app.use("/api/hard-scores", hardRoutes);
app.use("/api/top-hard-scores", hardRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
