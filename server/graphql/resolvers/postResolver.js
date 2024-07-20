const PostModel = require('../../models/Post');

console.log('Loading postResolver');

const postResolvers = {
  Query: {
    post: async (_, { id }) => {
      return await PostModel.findById(id).populate('comments');
    },
    posts: async (_, { filter, limit, sortBy }) => {
      const queryOptions = {};
      if (limit) queryOptions.limit = limit;
      if (sortBy) queryOptions.sort = { [sortBy]: 1 };
      
      return await PostModel.find(filter, null, queryOptions).populate('comments');
    }
  },
  Mutation: {
    addPost: async (_, { postData }) => {
      const newPost = new PostModel(postData);
      return await newPost.save();
    },
    updatePost: async (_, { id, postData }) => {
      return await PostModel.findByIdAndUpdate(id, postData, { new: true });
    }
  }
};

module.exports = postResolvers;
