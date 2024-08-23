require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../../models/User');

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

const userResolvers = {
  Query: {
    user: async (_, { id }) => {
      try {
        return await UserModel.findById(id);
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
      }
    },
    users: async (_, { filter, limit, sortBy }) => {
      try {
        const queryOptions = {};
        if (limit) queryOptions.limit = limit;
        if (sortBy) queryOptions.sort = { [sortBy]: 1 };
        
        return await UserModel.find(filter, null, queryOptions);
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    }
  },
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await UserModel.findOne({ username });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error('No user found with this username or password');
      }

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
        token,
        user: {
          id: user._id,
          username: user.username,
        },
      };
    },
    addUser: async (_, { username, email, password, role = 'USER' }) => {
      try {
        const userData = { username, email, password, role };
        const newUser = new UserModel(userData);
        await newUser.save();
  
        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        return {
          id: newUser._id,
          username: newUser.username,
          token,  // Ensure the token is returned
        };
      } catch (error) {
        console.error('Error adding user:', error.message, error); 
        throw new Error('Failed to add user');
      }
    },
    updateUser: async (_, { id, userData }) => {
      try {
        return await UserModel.findByIdAndUpdate(id, userData, { new: true });
      } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
      }
    }
  }
};

module.exports = userResolvers;
