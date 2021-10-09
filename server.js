const path = require("path");
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware')


const app = express();
app.use(cors());

var apiProxy = createProxyMiddleware('/', { target: 'http://api.openweathermap.org/data/2.5/forecast' });

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, ".", "build");
app.use(express.static(publicPath));
app.use(apiProxy);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("*", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
