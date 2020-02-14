import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { resolvers, typeDefs } from "./Resolvers";
import { setContext } from "@apollo/link-context";
import fetch from "node-fetch";

const httpLink = createHttpLink({
  uri: "https://prisma2-graphql-yoga-shield.now.sh/",
  credentials: "include",
  fetch
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers
});

const data = {
  isLoggedIn: false,
  currentlyLoggedIn: [],
  networkStatus: {
    __typename: "NetworkStatus",
    isConnected: false
  }
};

client.cache.writeData({ data });

client.onResetStore(() => cache.writeData({ data }));

export default client;
