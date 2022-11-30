const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const Project = require('./Project');


const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now
    },
    username: {
        type: String
    }
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true  
    // },
    // project: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Project',
    //     required: true  
    // }

})


module.exports = commentSchema
