const BookModel = require('../../models/Book'); 

// console.log('Loading bookResolvers');

const bookResolvers = {
  Query: {
    // Fetch a single book by ID
    book: async (_, { id }) => {
      return await BookModel.findById(id).populate('author genres reviews');
    },
    // Fetch all books with optional filtering
    books: async (_, { filter }) => {
      return await BookModel.find(filter).populate('author genres reviews');
    }
  },
  Mutation: {
    // Add a new book
    addBook: async (_, { bookData }) => {
      const newBook = new BookModel(bookData);
      return await newBook.save();
    },
    // Update an existing book
    updateBook: async (_, { id, bookData }) => {
      return await BookModel.findByIdAndUpdate(id, bookData, { new: true, runValidators: true });
    }
  }
};

module.exports = bookResolvers;
