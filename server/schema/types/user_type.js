const graphql = require('graphql');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const FavouriteType = require('./favourite_type');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,

} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    favourites: {
      type: new GraphQLList(FavouriteType),
      resolve(parentValue) {
        return User.findColor(parentValue.id);
      },
    },
  },
});

module.exports = UserType;
