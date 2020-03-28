
const express = require('express');
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("front-end"));




app.listen(3000, () => console.log("Server listening on port 3000"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));