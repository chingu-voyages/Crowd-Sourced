const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	name: String,
	category: String,
	description: String,
	userId: String
});

module.exports = mongoose.model('Item', itemSchema);
