const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
} 

type Post {
    _id: ID
    description: String
    image: String
    fundingGoal: String
    purpose: String
} 

type Comment {
    _id: ID
    comment: String
    user: [User]
    post: [Post]
}

type Auth {
    token: ID
    user: User
  }

type Query {
    user: User
    post(_id: ID, name: String): [Post]
    comment(_id: ID, name: String): Comment
}

type Mutations {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPost(name: String, description: String, fundingGoal: Number): Post
    addComment( comment: String): Comment
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;
