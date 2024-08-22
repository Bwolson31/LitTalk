const AuthorModel = require('../../models/Author');

// console.log('Loading authorResolvers');

const authorResolvers = {
  Query: {
    author: async (_, { id }) => {
      return await AuthorModel.findById(id).populate('books');
    },
    authors: async () => {
      return await AuthorModel.find({}).populate('books');
    }
  },
  Mutation: {
    addAuthor: async (_, { authorData }) => {
      const newAuthor = new AuthorModel(authorData);
      return await newAuthor.save();
    },
    updateAuthor: async (_, { id, authorData }) => {
      return await AuthorModel.findByIdAndUpdate(id, authorData, { new: true, runValidators: true });
    }
  }
};

module.exports = authorResolvers;
