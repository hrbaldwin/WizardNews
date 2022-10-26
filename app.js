const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const { PORT = 1337 } = process.env;
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

const timeAgo = require("node-time-ago");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

//--------------- ALL POSTS ---------------

app.use("/", require("./views/postList"));

//--------------- SINGLE POSTS ---------------

app.get("/posts/:id", require("./views/postDetails"));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

console.log("branch test");
