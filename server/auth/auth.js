require('dotenv').config();
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION || '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization ? req.headers.authorization.split(' ').pop().trim() : (req.body.token || req.query.token);

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.error(`Authentication error: ${error.message}`);
      throw new GraphQLError('Invalid token', {
        extensions: {
          code: 'AUTH_TOKEN_ERROR',
          message: 'Failed to authenticate using the provided token.'
        },
      });
    }

    return req;
  },
  signToken: function ({ email, username, id }) {
    const payload = { email, username, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
