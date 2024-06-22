const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  books: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book' 
}],
  authors: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author' }]
});

module.exports = mongoose.model('Genre', genreSchema);
