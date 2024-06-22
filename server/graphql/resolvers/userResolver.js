const UserModel = require('../../models/User'); 

const userResolvers = {
  Query: {
    user: async (_, { id }) => {
      return await UserModel.findById(id);
    },
    users: async (_, { filter, limit, sortBy }) => {
      const queryOptions = {};
      if (limit) queryOptions.limit = limit;
      if (sortBy) queryOptions.sort = { [sortBy]: 1 };
      
      return await UserModel.find(filter, null, queryOptions);
    }
  },
  Mutation: {
    addUser: async (_, { userData }) => {
      const newUser = new UserModel(userData);
      return await newUser.save();
    },
    updateUser: async (_, { id, userData }) => {
      return await UserModel.findByIdAndUpdate(id, userData, { new: true });
    }
  }
};

module.exports = userResolvers;

