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
`