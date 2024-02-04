// models/YourModel.js
const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  // Define your schema fields here
  field1: String,
  field2: Number,
  // ...
});

const YourModel = mongoose.model('Model', yourSchema);

module.exports = YourModel;
