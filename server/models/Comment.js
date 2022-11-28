const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User')
const Post = require('./Post')


const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true  
    // },
    // post: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Post',
    //     required: true  
    // }

})


module.exports = commentSchema
