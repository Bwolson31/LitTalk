const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        trim: true, 
    },
    email: {
        type: String, 
        required: true,
        unique: true, 
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String, 
        required: true, 
        validate: {
            validator: function(v) {
              // Password validation regex
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: props => `${props.value} is not a valid password. Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.`
          }
        },
        role: {
            type: String, 
            enum: ['USER', 'MODERATOR', 'ADMIN'],
            DEFAULT: 'USER'
    },
    forums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forum'
      }],
      posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }],
      comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }]
});

userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;