const mongoose = require("mongoose");

const User = mongoose.model("user", {
  jenis_kelamin: { type: String },
  divisi: { type: String },
  umur: { type: Number }
});

const Location = mongoose.model("location", {
  tanggal: { type: String },
  lokasi_dominan: { type: String }
});

module.exports = { User, Location };
