import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        user_id
        name
        role
        email
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        user_id
        name
        role
        email
      }
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  {
    currentUser {
      email
      name
      role
      user_id
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query isUserLoggedIn {
    isLoggedIn @client
  }
`;

export const IS_CURRENTLY_LOGGED_IN = gql`
  query isUserCurrentlyLoggedIn {
    user @client {
      name
      user_id
      email
      token
    }
  }
`;
