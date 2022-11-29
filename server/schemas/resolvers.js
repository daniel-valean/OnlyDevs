const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51M9D8lCh7zP8YFj8qQc2yS0JUHWYlHuwAmFlnIKBAcCwDMGDPXRxejHkfGiJgqubNapnwhDXHtVTjXAitim0roVv000juBWcF9')

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

        project: async (parent, { _id }) => {
            return await Project.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.projects',
                    populate: 'category'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.projectss',
                    populate: 'category'
                });

                return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },


        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ projects: args.projects });
            const line_items = [];

            const { projects } = await order.populate('projects');

            for (let i = 0; i < projects.length; i++) {
                const project = await stripe.projects.create({
                    name: projects[i].name,
                    description: projects[i].description,
                    images: [`${url}/images/${projects[i].image}`]
                });

                const price = await stripe.prices.create({
                    project: project.id,
                    unit_amount: projects[i].price * 100,
                    currency: 'usd',
                });

                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }

    },


    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        addProject: async (parent, args, context) => {
            const Project = await Project.create({ ...args, user: context.user._id })
            const token = signToken(Project)

            return { token, project };
        },
        addComment: async (parent, args) => {
            const updatedProject = await Project.findOneAndUpdate({ _id: args.projectId }, { $push: { comments: { comment: args.comment } } }, { returnOriginal: false })

            return updatedProject;
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