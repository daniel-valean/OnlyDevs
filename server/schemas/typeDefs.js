const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
} 

type Post {
    _id: ID
    title: String
    description: String
    image: String
    fundingGoal: Int
    fundingProgress: Int
    purpose: String
    user: User
    comments: [Comment]
} 

type Comment {
    _id: ID
    comment: String
    createdAt: Date
    # user: User
    # post: Post
}

type Auth {
    token: ID
    user: User
  }

type Query {
    getUser: User
    getPost(_id: ID, name: String): Post
    getPosts: [Post]
}

type Mutations {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(title: String, description: String, fundingGoal: Int, image: String, purpose: String): Post
    addComment( comment: String, postId: ID): Comment
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;
