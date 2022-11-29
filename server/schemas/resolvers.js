const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getProjects: async (parent, args, context) => {
            return await Project.find().populate('user');
        },
        getProject: async (parent, { _id }) => {
            return await Project.findById(_id).populate('user');
        },
        getUser: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        addProject: async (parent, args, context) => {
            console.log(context)
            console.log('word')
            const addProject = await Project.create({ ...args, user: context.user._id })
            return addProject
        },
        addComment: async (parent, args) => {
            const updatedProject = await Project.findOneAndUpdate({_id: args.projectId}, {$push: {comments: {comment: args.comment}}}, {returnOriginal: false})
            
            return updatedProject;
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

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