const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const commentSchema = require('./Comment');

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, 
    },
    fundingGoal: {
        type: Number,
        required: true
    },
    fundingProgress: {
        type: Number,
        required: true,
        default: 0
    },
    purpose: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },
    comments: [commentSchema]
});

const Project = mongoose.model('Project', projectSchema)

module.exports = Project