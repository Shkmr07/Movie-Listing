const express = require("express");
const connectDB = require("./config");
const router = require("./src/routes/combine.routes");
const cors = require("cors")
require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(cors({
  origin : "*",
  methods : ["GET","POST","PATCH","PUT","DELETE"]
}))

app.get("/", (req, res) => {
  res.send("Welcome to Movie Listing app");
});
app.use(express.json())

app.use("/api",router)

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`server is running at ${port}`));
  })
  .catch((err) => {
    console.error(`Error happend connecting the server ${err.message}`);
    process.exit(1)
  });
