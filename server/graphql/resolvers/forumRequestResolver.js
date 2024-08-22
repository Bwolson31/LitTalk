const ForumRequest = require('../../models/ForumRequest');
const UserModel = require('../../models/User');

// console.log('Loading forumRequestResolver');

const forumRequestResolvers = {
  Mutation: {
    submitForumRequest: async (_, { requestInput }, { user }) => {
      if (!user) {
        throw new Error("Authentication required");
      }

      const newRequest = new ForumRequest({ ...requestInput, user: user.id });
      return await newRequest.save();
    },
    approveForumRequest: async (_, { requestId }, { user }) => {
      if (!user || user.role !== 'admin') {
        throw new Error("Authorization required: Only admins can approve forum requests");
      }

      const request = await ForumRequest.findById(requestId);
      if (!request) {
        throw new Error("Forum request not found");
      }

      if (request.status !== 'pending') {
        throw new Error("Request is not in pending state");
      }

      request.status = 'approved';
      await request.save();

      // Update user role to moderator
      await UserModel.findByIdAndUpdate(request.user, { role: 'moderator' });

      return request;
    },
    // TODO: Add other mutations such as rejectForumRequest if needed
  },
};

module.exports = forumRequestResolvers;
