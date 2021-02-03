require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const routerv1 = require("./routes/routerv1");

app.use(cors());
app.use(bodyParser.json());
app.use("/Images", express.static("images"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", routerv1);

app.listen(port, () => console.log(`Server running on port ${port}`));
