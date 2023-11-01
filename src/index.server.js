// server.js
const express = require("express");
const cors = require("cors");
const env = require("dotenv");

const emailApi = require("./api/email");

//configure env
env.config();

//instantiating the server
const app = express();

//bodyParser/expressjs for passing datas
app.use(cors());
app.use(express.json());
app.use("/api/email", emailApi);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
