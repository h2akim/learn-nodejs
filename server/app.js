require("./loader");

const express = require("express");
var cors = require("cors");
const app = express();
const path = require('path');

/** Middlewares */
app.use(cors());
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));

/** Routes **/
require("./routes/api")(app);
require("./routes/web")(app);

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("Running server on port: " + process.env.PORT);
  } else {
    console.error("Error, failed to start server");
  }
});
