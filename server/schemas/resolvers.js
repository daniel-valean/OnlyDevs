const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');

const resolvers = {
    Query: {
        posts: async (parent, args, context) => {
            return await Post.find();
        },
        post: async (parent, { _id }) => {
            return await Post.findById(_id).populate('comments');
        },

        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('post')
            }
        },
        comment: async (parent, args, context) => {
            return await Comment.find();
        }
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        addPost: async (parent, args) => {
            const post = await Post.create(args)
            const token = signToken(post)

            return { token, post };
        },
        addComment: async (parent, args) => {
            const comment = await Comment.create(args)
            const token = signToken(comment)

            return { token, comment };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers