import { gql } from '@apollo/client';
// gets user information
export const QUERY_USER = gql`
query getUser {
  getUser {
    username
    password
    email
    _id
  }
}
`;
// gets project information
export const QUERY_PROJECT = gql`
query GetProject($id: ID, $name: String) {
  getProject(_id: $id, name: $name) {
    _id
    title
    description
    image
    fundingGoal
    fundingProgress
    purpose
    user {
      _id
      username
      email
      password
    }
    comments {
      _id
      comment
      createdAt
      username
    }
  }
}
`;
// Gets all projects
export const QUERY_ALL_PROJECTS = gql`
query GetProjects {
  getProjects {
    _id
    title
    description
    image
    fundingGoal
    fundingProgress
    purpose
    user {
      _id
      username
      email
      password
    }
    comments {
      _id
      comment
      createdAt
    }
  }
}
`
export const QUERY_CHECKOUT = gql`
query getCheckout($_id: ID, $donationAmount: Int) {
  checkout(_id: $_id, donationAmount: $donationAmount) {
    session
  }
}
`;