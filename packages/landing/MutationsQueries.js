import { gql } from "@apollo/client";

export const EMAIL_CONSULT = gql`
  mutation createOneProposal($input: ProposalCreateInput!) {
    createOneProposal(data: $input) {
      created_at
      name
      email
      type {
        cost
        description
        model
        name
        services {
          service
          cost
        }
      }
    }
  }
`;

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

// export const CURRENT_USER_QUERY = gql`
//   {
//     currentUser {
//       email
//       name
//       role
//       user_id
//     }
//   }
// `;

export const IS_LOGGED_IN = gql`
  query isUserLoggedIn {
    isLoggedIn @client
  }
`;

export const IS_CURRENTLY_LOGGED_IN = gql`
  query userCurrentlyLoggedIn {
    currentUser @client {
      name
      user_id
      email
      token
    }
  }
`;
