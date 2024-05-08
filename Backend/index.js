const express = require("express");
const cors = require("cors");
const { Connection } = require("./config/db.config");
const { userRouter } = require("./routes/user.route");
const { tourRouter } = require("./routes/tour.route");
const app = express();
app.use(express.json());
require("dotenv").config();
app.use(cors());

app.use("/", userRouter);
app.use("/", tourRouter);

app.listen(process.env.PORT, async () => {
  try {
    await Connection;
    console.log("Database Connected");
    console.log(`Server is Running at Port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
