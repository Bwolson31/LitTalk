const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author' },
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Review' 
}],
  genres: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Genre' }]  
});

module.exports = mongoose.model('Book', bookSchema);
