const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
	name: String,
	category: String,
	description: String,
	location: Number,
	itemsNeeded: [ String ],
	userId: String
});

module.exports = mongoose.model('Campaign', campaignSchema);
