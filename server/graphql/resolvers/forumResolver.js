const ForumModel = require('../../models/Forum');

// console.log('Loading ForumResolver');
const forumResolvers = {
  Query: {
    forum: async (_, { id }) => {
      return await ForumModel.findById(id).populate('posts');
    },
    forums: async (_, { filter, limit, sortBy }) => {
      const queryOptions = {};
      if (limit) queryOptions.limit = limit;
      if (sortBy) queryOptions.sort = { [sortBy]: 1 };
      
      return await ForumModel.find(filter, null, queryOptions).populate('posts');
    }
  },
  Mutation: {
    addForum: async (_, { forumData }) => {
      const newForum = new ForumModel(forumData);
      return await newForum.save();
    },
    updateForum: async (_, { id, forumData }) => {
      return await ForumModel.findByIdAndUpdate(id, forumData, { new: true });
    }
  }
};

module.exports = forumResolvers;
