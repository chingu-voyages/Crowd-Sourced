const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  category: String,
  userId: String
});

module.exports = mongoose.model('Item', itemSchema);