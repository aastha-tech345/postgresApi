const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/connect.js");

const gigsRouter = require("./routes/gigs.js");

const app = express();

app.use(bodyParser.json());

app.use("/gigs", gigsRouter);

const PORT = process.env.PORT;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
