const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
} 

type Project {
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
    createdAt: String
    # user: User
    # project: Project
}

type Auth {
    token: ID
    user: User
}

type Query {
    getUser: User
    getProject(_id: ID, name: String): Project
    getProjects: [Project]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(title: String, description: String, fundingGoal: Int, image: String, purpose: String): Project
    addComment( comment: String, projectId: ID): Project
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;
