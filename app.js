const express = require("express");
const multer = require("multer");
const http = require("http");
const path = require('path');
const userModel = require("./models/userModel");

const app = express();
const server = http.createServer(app);

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be stored in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});
const upload = multer({ storage });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/", upload.single("file"), async (req, res) => {
    const text = req.body.text;
    const file = req.file;

    const data = await userModel.create({
        filename: req.file.filename,
        path: req.file.path
    })

    res.send(data);
})


app.get("/gallery", async (req, res) => {
    const data = await userModel.find();
    res.render("gallery", { data });
})


server.listen(4000);