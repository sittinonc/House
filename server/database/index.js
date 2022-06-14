const mongoose = require('mongoose')
const uri = require('./config')
const conn = mongoose.createConnection(uri);


module.exports = conn