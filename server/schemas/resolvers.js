const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('')

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


        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const line_items = [];

            const project = await Project.findById(args._id).populate('user');

            const stripeProject = await stripe.products.create({
                name: project.title,
                description: project.description,
                images: [project.image]
            })

            const price = await stripe.prices.create({
                product: stripeProject.id,
                unit_amount: args.donationAmount * 100,
                currency: 'usd',
            });

            line_items.push({
                price: price.id,
                quantity: 1
            });
            


            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/project-display/${args._id}`,
                cancel_url: `${url}/project-display/${args._id}`
            });
            console.log(session)
            if(session) {
                if(context.user) { 
                    
                    await Project.findOneAndUpdate({_id: args._id},
                        {
                            $push: { comments: { comment: `Donated $${args.donationAmount}`, username: context.user.username } }
                        }
                        ) 
                    await Project.findOneAndUpdate({_id: args._id}, { fundingProgress: project.fundingProgress + args.donationAmount })
                } else {
                    await Project.findOneAndUpdate({_id: args._id},
                        {
                            $push: { comments: { comment: `Donated $${args.donationAmount}`, username: 'Anonymous' } }
                        }
                        ) 
                    await Project.findOneAndUpdate({_id: args._id}, { fundingProgress: project.fundingProgress + args.donationAmount })
                }
            }

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
            const addProject = await Project.create({ ...args, user: context.user._id })
            return addProject
        },
        addComment: async (parent, args, context) => {
            if (context.user) {
                const updatedProject = await Project.findOneAndUpdate({ _id: args.projectId }, { $push: { comments: { comment: args.comment, username: context.user.username } } }, { returnOriginal: false })
                return updatedProject;
            } else {
                const updatedProject = await Project.findOneAndUpdate({ _id: args.projectId }, { $push: { comments: { comment: args.comment, username: "Anonymous" } } }, { returnOriginal: false })
                return updatedProject;
            }

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