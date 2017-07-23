const mongoose = require('mongoose');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;
const Favourite = mongoose.model('favourite');

const FavouriteType = new GraphQLObjectType({
  name:  'FavouriteType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    user: {
      type: require('./user_type'),
      resolve(parentValue) {
        return Favourite.findById(parentValue).populate('user')
          .then(favourite => {
            return favourite.user
          });
      },
    },
  }),
});

module.exports = FavouriteType;
