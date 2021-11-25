require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mailingRoute = require("./routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT;
app.use("/sendemail", mailingRoute);

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
