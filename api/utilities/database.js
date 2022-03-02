const mongoose = require("mongoose");
const debug = require("debug");

const log = debug("app:log");

module.exports = mongoose
  .connect(process.env.URL)
  .then(log("connected to the database..."))
  .catch((err) => log(err, "Unable to connect to database..."));

