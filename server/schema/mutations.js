const graphql = require('graphql');
const mongoose = require('mongoose');
const User = mongoose.model('user');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,

} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      },
    },

    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    addFavouriteToUser: {
      type: UserType,
      args: {
        content: { type: GraphQLString },
        userId: { type: GraphQLID },
      },
      resolve(parentValue, { content, userId }) {
        return User.addColor(userId, content);
      },
    },
  },
});

module.exports = mutation;
