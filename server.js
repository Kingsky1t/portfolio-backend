const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// const projects = require("./projects");
const connectDB = require("./connection");
const Projects = require("./schema");

app.use(cors());
app.use(express.json());
app.use("/assets", express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    Projects.find().then((data) => {
        res.json(data);
    });
});

app.get("/favorite", (req, res) => {
    Projects.find({ favorite: true }).then((data) => {
        res.json(data);
    });
});

app.post("/add", (req, res) => {
    const project = new Projects({
        name: req.body?.name,
        link: req.body?.link,
        image: req.body?.image,
        favorite: req.body?.favorite,
    });

    project
        .save()
        .then(() => {
            res.json("new project created");
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(5000, () => {
    console.log("app running on port 5000");
});
