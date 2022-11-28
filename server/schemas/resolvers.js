const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getPosts: async (parent, args, context) => {
            return await Post.find().populate('user');
        },
        getPost: async (parent, { _id }) => {
            return await Post.findById(_id).populate('user');
        },

        getUser: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
            }
        },
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        addPost: async (parent, args, context) => {
            const post = await Post.create({ ...args, user: context.user._id })
            const token = signToken(post)

            return { token, post };
        },
        addComment: async (parent, args) => {
            const updatedPost = await Post.findOneAndUpdate({_id: args.postId}, {$push: {comments: {comment: args.comment}}}, {returnOriginal: false})
            
            return updatedPost;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers