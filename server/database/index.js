const mongoose = require('mongoose');
const uri = require('./config');
const conn = mongoose.createConnection(uri, (err) => {
  console.log('Error', err);
});

conn.on('open', () => {
  console.log('connected to db');
});

module.exports = { conn };
