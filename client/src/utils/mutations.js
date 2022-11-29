//import gql from apollo client
import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
      password
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
    }
  }
}
`;

export const ADD_PROJECT = gql`
mutation AddProject($title: String, $description: String, $fundingGoal: Int, $image: String, $purpose: String) {
  addProject(title: $title, description: $description, fundingGoal: $fundingGoal, image: $image, purpose: $purpose) {
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

export const ADD_COMMENT = gql`
mutation AddComment($comment: String, $projectId: ID) {
  addComment(comment: $comment, projectId: $projectId) {
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