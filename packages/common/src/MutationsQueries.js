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

export const REQUEST = gql`
  mutation upsertOneRequest(
    $where: RequestWhereUniqueInput!
    $create: RequestCreateInput!
    $update: RequestUpdateInput!
  ) {
    upsertOneRequest(where: $where, create: $create, update: $update) {
      request_id
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
      role
    }
  }
`;

export const CONFIRMED = gql`
  query confirmed {
    confirmed @client {
      emailConfirmed
    }
  }
`;

export const EMAIL_CONFIRMED = gql`
  query emailConfirmed($email: String!) {
    emailConfirmed(email: $email) {
      email
      emailConfirmed
    }
  }
`;

export const SEND_CONFIRM_EMAIL = gql`
  mutation sendConfirmEmail($email: String!) {
    sendConfirmEmail(email: $email) {
      email
      emailConfirmed
    }
  }
`;

export const EMAIL_CONFIRM = gql`
  mutation emailConfirm($emailConfirmToken: String) {
    emailConfirm(emailConfirmToken: $emailConfirmToken) {
      email
      emailConfirmed
    }
  }
`;

export const GET_REQUESTS = gql`
  query getRequests(
    $where: RequestWhereInput
    $orderBy: RequestOrderByInput
    $first: Int
    $last: Int
    $after: RequestWhereUniqueInput
    $before: RequestWhereUniqueInput
    $skip: Int
  ) {
    requests(
      where: $where
      orderBy: $orderBy
      skip: $skip
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
      pdf
      coaching
      newsletter
      email
      emailConfirmed
      phone
      contact
      created_at
      acceptTerms
      name
      Type {
        name
        description
      }
    }
  }
`;
