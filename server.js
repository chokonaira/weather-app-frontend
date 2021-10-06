const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, ".", "build");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
