const express = require("express");
const app = express();
const port = 3000;
const host = "localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./dbconfig");
const { User, Location } = require("./model");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create Data
app.post("/user", async (req, res) => {
  User.insertMany(req.body).then((result, err) => {
    console.log(req.body);
    if (err) {
      res.status(404).json({ err });
    } else {
      res.status(200).json({
        status: "OK",
        data: {
          jenis_kelamin: req.body.jenis_kelamin,
          divisi: req.body.divisi,
          umur: req.body.umur
        }
      });
    }
  });
});

app.post;

app.post("/location", async (req, res) => {
  Location.insertMany(req.body).then((result, err) => {
    console.log(req.body);
    if (err) {
      res.status(404).json({ err });
    }
    res.status(200).json({
      status: "OK",
      data: {
        tanggal: req.body.tanggal,
        lokasi_dominan: req.body.lokasi_dominan
      }
    });
  });
});

// Read Data
app.get("/user", async (req, res) => {
  const data = await User.find();
  res.status(200).json({
    status: "fetch success",
    data
  });
});

// Delete Data
app.delete("/user", async (req, res) => {
  const check = await User.deleteOne({ _id: req.body });
  console.log(check);
  if (check.deletedCount == 0) {
    res.status(404).json({
      status: "Data not found"
    });
  } else {
    res.status(200).json({
      status: "Data deleted"
    });
  }
});

app.listen(port, host, () => {
  console.log(`Example app listening on http://${host}:${port}`);
});
