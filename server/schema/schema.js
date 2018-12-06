const graphql = require('graphql');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema, 
        GraphQLID,
        GraphQLInt
      } = graphql;

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    location: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'Root Query',
  fields: {
    item: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // db stuff here
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // db stuff here
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});