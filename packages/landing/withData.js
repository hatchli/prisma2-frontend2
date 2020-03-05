import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { resolvers, typeDefs } from "./Resolvers";
import { setContext } from "@apollo/link-context";
import { persistCache } from "apollo-cache-persist-dev";
import fetch from "node-fetch";
import { IS_CURRENTLY_LOGGED_IN } from "../landing/MutationsQueries";

// Local state queries

const cache = new InMemoryCache();

const data = {
  isLoggedIn: false,
  currentlyLoggedIn: [],
  networkStatus: {
    __typename: "NetworkStatus",
    isConnected: false
  }
};

cache.writeData({ data });

const checkCache = async () => {
  await persistCache({
    cache,
    storage: window.localStorage
  });
};

checkCache();

const dev = "http://localhost:3001/";
const prod = "https://prisma2-graphql-yoga-shield.now.sh/";

const httpLink = createHttpLink({
  uri: dev,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  credentials: "include",
  fetch
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const user = client.readQuery({ query: IS_CURRENTLY_LOGGED_IN });
  console.log("user", user);
  // const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${user.token}` : ""
    }
  };
});

const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: cache,
  typeDefs,
  resolvers
});

client.onResetStore(() => cache.writeData({ data }));
export default client;
