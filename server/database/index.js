const mongoose = require("mongoose");
const uri = require("./config");
const conn = mongoose.createConnection(uri, (err) => {
    console.log(err);
});

module.exports = { conn };
