const GenreModel = require('../../models/Genre');

// console.log('Loading genreResolver');

const genreResolvers = {
  Query: {
    // Fetch a single genre by ID
    genre: async (_, { id }) => {
      return await GenreModel.findById(id).populate('books authors');
    },

    // Fetch all genres
    genres: async () => {
      return await GenreModel.find({}).populate('books authors');
    },

    // Fetch genres based on filter criteria
    genresByFilter: async (_, { filter }) => {
      const query = buildGenreQuery(filter);
      return await GenreModel.find(query).populate('books authors');
    }
  }
};

// Helper function to construct a query object based on filter input
function buildGenreQuery(filter) {
  let query = {};
  
  if (filter.name) {
    query.name = { $regex: new RegExp(filter.name, 'i') }; // Case-insensitive regex search for name
  }
  if (filter.associatedBookTitle) {
    // Assuming you can directly query this through genres; adjust based on your schema
    query['books.title'] = { $regex: new RegExp(filter.associatedBookTitle, 'i') };
  }
  if (filter.associatedAuthorName) {
    // Similarly, adjust based on actual database relationships
    query['authors.name'] = { $regex: new RegExp(filter.associatedAuthorName, 'i') };
  }

  return query;
}

module.exports = genreResolvers;
