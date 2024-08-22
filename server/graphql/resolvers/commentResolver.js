const CommentModel = require('../../models/Comment');

// console.log('Loading commentResolver');

const commentResolvers = {
  Query: {
    comment: async (_, { id }) => {
      return await CommentModel.findById(id);
    },
    comments: async (_, { filter, limit, sortBy }) => {
      const queryOptions = {};
      if (limit) queryOptions.limit = limit;
      if (sortBy) queryOptions.sort = { [sortBy]: 1 };
      
      return await CommentModel.find(filter, null, queryOptions);
    }
  },
  Mutation: {
    addComment: async (_, { commentData }) => {
      const newComment = new CommentModel(commentData);
      return await newComment.save();
    },
    updateComment: async (_, { id, commentData }) => {
      return await CommentModel.findByIdAndUpdate(id, commentData, { new: true });
    }
  }
};

module.exports = commentResolvers;
