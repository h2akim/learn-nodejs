require("./loader");

const express = require("express");
var cors = require("cors");
const app = express();
require("express-route-grouping");

/** Cors */
app.use(cors());

/** Serve static files */
app.use("/assets", express.static("static"));

/** json */
app.use(express.json());

/** body-parser */
app.use(require('body-parser').urlencoded({ extended: false }));

/** routes **/
require("./routes/web")(app);
require("./routes/api")(app);

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("Running server on port: " + process.env.PORT);
  } else {
    console.error("Error, failed to start server");
  }
});
