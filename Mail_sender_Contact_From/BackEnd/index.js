const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


const mailRoutes = require("./Router/sendmail");
const histroryRoutes = require("./Router/sendmail")
const app = express();
app.use(express.json());
app.use(cors());

// Database Connection to mongoDB


mongoose
  .connect(
    process.env.DATABASE_URL  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error connecting database", err.message));

app.use("/mail", mailRoutes);
app.use("/sender" ,histroryRoutes)

// Start Server:

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
