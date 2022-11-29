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
        required: true,
    },
    fundingGoal: {
        type: Number,
        required: true
    },
    fundingProgress: {
        type: Number,
        default: 0
    },
    purpose: {
        type: String,
        required: true,
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