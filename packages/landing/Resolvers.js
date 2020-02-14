import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    currentlyLoggedIn: [User]
  }

  extend type User {
    name: String!
    email: String!
    user_id: Int!
    token: String
  }
`;

export const resolvers = {};
