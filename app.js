const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//create app
const app = express();

//MongoDB connection string
const uri =
  "mongodb+srv://sundar_31:jeyanthi_123@herocollection.kx3umrz.mongodb.net/hero?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("App listening port 3000");
});

//set ejs
app.set("view engine", "ejs");

//Get data

//externel static file

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const heros = [
    { name: "Super-man 🦸‍♂️", universe: "DC" },
    { name: "Spider-man 🕷", universe: "MARVEL" },
    { name: "Bat-man 🦇", universe: "DC" },
  ];
  res.render("index", { title: "Home", heros });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/heros/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//404 page

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
