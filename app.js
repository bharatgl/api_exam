const express = require("express");

const app = express();

const cors = require("cors");
// require("dotenv").config({ path: ".env" });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    console.log("Examhub API is running..........");
    res.send("<h1>Examhub API is running........</h1>");
  } catch (error) {
    console.log("error");
  }
});
// app.listen(4000);



const userRoute = require('./routes/users')
app.use('/users',userRoute)
// app.listen(process.env.APP_PORT);
app.listen(4000);