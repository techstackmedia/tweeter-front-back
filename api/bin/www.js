const dotenv = require("dotenv");
const debug = require("debug");
const app = require("../app");

dotenv.config();
const log = debug("app:log");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  if (app.get("env")) {
    log(`App running on port ${port}`);
  }
});
