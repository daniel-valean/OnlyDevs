const { AuthenticationError } = require('apollo-server-express');
const { User, Post, } = require('../models');

const resolvers = {
    Query: {
        post: async (parent, { _id }) => {

        },

        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({

                })
            }
        }
    }
}