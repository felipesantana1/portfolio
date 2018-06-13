const express = require("express");
const ejs = require("ejs");
const multer = require("multer");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + "/public"))

app.listen(8000, () => {
    console.log("Listening on port 8000");
})