const graphql = require('graphql');
const UserType = require('./user_type');
const FavouriteType = require('./favourite_type');
const mongoose = require('mongoose');

const Favourite = mongoose.model('favourite');

const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    favourite: {
      type: FavouriteType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Favourite.findById(id);
      },
    },
  },
});

module.exports = RootQueryType;
