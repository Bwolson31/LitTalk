const AuthorModel = require('../../models/Author'); 

const authorResolvers = {
  Query: {
    // Fetch a single author by ID
    author: async (_, { id }) => {
      return await AuthorModel.findById(id).populate('books');
    },
    // Fetch all authors
    authors: async () => {
      return await AuthorModel.find({}).populate('books');
    }
  },
  Mutation: {
    // Add a new author
    addAuthor: async (_, { authorData }) => {
      const newAuthor = new AuthorModel(authorData);
      return await newAuthor.save();
    },
    // Update an existing author
    updateAuthor: async (_, { id, authorData }) => {
      return await AuthorModel.findByIdAndUpdate(id, authorData, { new: true, runValidators: true });
    }
  }
};

module.exports = authorResolvers;
