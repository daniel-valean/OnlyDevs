const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    name: {
        type: String,
        required: true, 
        trim: true
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
    purpose: {
        type: String
    }
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post