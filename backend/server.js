const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");
const router = express.Router();

app.use(cors());
app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

mongoose.connect("mongodb://127.0.0.1:27017/cyberplayground", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

router.route("/getData").get(function(req, res) {
  users.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
