const graphql = require('graphql');
const Item = require('../models/item');
const User = require('../models/user');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema, 
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLNonNull
      } = graphql;

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    user: { 
      type: UserType,
      resolve(parent, args){
        return User.findById(parent.userId);
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
          location: { type: GraphQLInt },
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
            userId: { type: new GraphQLNonNull(GraphQLID) }
          },
          resolve(parent, args){
            let item = new Item({
              name: args.name,
              category: args.category,
              userId: args.userId
            });
            return item.save();
            }
          }
      }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});