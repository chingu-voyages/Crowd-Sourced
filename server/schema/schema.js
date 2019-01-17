const graphql = require('graphql');
const Item = require('../models/item');
const User = require('../models/user');
const Campaign = require('../models/campaign');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

const ItemType = new GraphQLObjectType({
	name: 'Item',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		category: { type: GraphQLString },
		description: { type: GraphQLString },
		location: { type: GraphQLInt },
		email: { type: GraphQLString },
		user: {
			type: UserType,
			resolve(parent, args) {
				return User.find({ email: parent.email });
			}
		}
	})
});

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		location: { type: GraphQLInt },
		items: {
			type: new GraphQLList(ItemType),
			resolve(parent, args) {
				return Item.find({ userId: parent.id });
			}
		}
	})
});

const CampaignType = new GraphQLObjectType({
	name: 'Campaign',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		category: { type: GraphQLString },
		description: { type: GraphQLString },
		location: { type: GraphQLInt },
		itemsNeeded: { type: GraphQLList(GraphQLString) },
		user: {
			type: UserType,
			resolve(parent, args) {
				return User.findById(parent.userId);
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		item: {
			type: ItemType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Item.findById(args.id);
			}
		},
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return User.findById(args.id);
			}
		},
		items: {
			type: new GraphQLList(ItemType),
			resolve(parent, args) {
				return Item.find({});
			}
		},
		campaign: {
			type: CampaignType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Campaign.findById(args.id);
			}
		},
		campaigns: {
			type: new GraphQLList(CampaignType),
			resolve(parent, args) {
				return Campaign.find({});
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: {
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				location: { type: GraphQLInt }
			},
			resolve(parent, args) {
				let user = new User({
					name: args.name,
					email: args.email,
					location: args.location
				});
				return user.save();
			}
		},
		addItem: {
			type: ItemType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				category: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				location: { type: new GraphQLNonNull(GraphQLInt) }
				//userId: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args) {
				let item = new Item({
					name: args.name,
					category: args.category,
					description: args.description,
					email: args.email,
					location: args.location
					//userId: args.userId
				});
				return item.save();
			}
		},
		addCampaign: {
			type: CampaignType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				category: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
				location: { type: new GraphQLNonNull(GraphQLInt) },
				itemsNeeded: { type: new GraphQLList(GraphQLString) }
				//userId: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args) {
				let campaign = new Campaign({
					name: args.name,
					category: args.category,
					description: args.description,
					location: args.location,
					itemsNeeded: args.itemsNeeded
					//userId: args.userId
				});
				return campaign.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
