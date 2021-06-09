const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const multer = require('multer');
const mongoose = require("mongoose");
const router = express.Router();

// CORS SETUP
app.use(cors({
  origin: true, 
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

// DB CONNECTION
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

// Multer PHOTO STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");},
    filename: function(req, file, cb){
      const ext = file.mimetype.split('/')[1];
      cb(null, `uploads/${file.originalname}-${Date.now()}$.ext`);
    }
})

const upload = multer({
  storage: storage
})