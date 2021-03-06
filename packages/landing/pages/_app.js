import React, { useState, useEffect } from "react";
import Page from "../Page";
import { Modal } from "@redq/reuse-modal";
import { ApolloProvider } from "@apollo/client";
import "@redq/reuse-modal/es/index.css";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { resolvers, typeDefs } from "../Resolvers";
import { setContext } from "@apollo/link-context";
import { persistCache } from "apollo-cache-persist-dev";
import fetch from "node-fetch";
import { IS_CURRENTLY_LOGGED_IN } from "common/src/MutationsQueries";

export default ({ Component, pageProps }) => {
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    const cache = new InMemoryCache();
    const dev = "http://localhost:3000/api";

    const httpLink = createHttpLink({
      uri: process.env.BACKEND_URL_MYO,
      // uri: dev,
      onError: ({ networkError, graphQLErrors }) => {
        console.log("graphQLErrors wtihin httplink", graphQLErrors);
        console.log("networkError within httplink", networkError);
      },
      credentials: "include",
      fetch,
    });

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const user = client.readQuery({
        query: IS_CURRENTLY_LOGGED_IN,
      });
      console.log("user from authLink", user);
      const token = localStorage.getItem("token");
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization:
            user.currentUser != null
              ? `Bearer ${user.currentUser.token}`
              : token
              ? `Bearer ${token}`
              : "",
        },
      };
    });
    const client = new ApolloClient({
      ssrMode: true,
      disableOffline: true,
      link: authLink.concat(httpLink),
      cache,
      // process.browser && typeof window !== "undefined"
      //   ? new InMemoryCache().restore(window.__APOLLO_STATE__)
      //   : new InMemoryCache(),
      typeDefs,
      resolvers,
    });
    const initData = {
      currentUser: null,
      networkStatus: {
        __typename: "NetworkStatus",
        isConnected: false,
      },
    };
    cache.writeQuery({ query: IS_CURRENTLY_LOGGED_IN, data: initData });
    persistCache({
      cache,
      debug: true,
      storage: window.localStorage,
    }).then(() => {
      client.onResetStore(async () =>
        cache.writeQuery({ query: IS_CURRENTLY_LOGGED_IN, data: initData })
      );
      setClient(client);
    });
    return () => {};
  }, []);
  // const state = apolloClient.extract();

  // let data = undefined;
  // try {
  //   data = client.readQuery({ query: IS_CURRENTLY_LOGGED_IN });
  //   console.log("data from try block", data);
  // } catch (error) {
  //   console.log("No client data yet");
  //   console.log(error);
  // }

  // if (!data) {
  //   client.writeQuery({ query: IS_CURRENTLY_LOGGED_IN, data: initData });
  // }
  if (client === undefined) return <></>;

  return (
    <ApolloProvider client={client}>
      <Page>
        <Modal />
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};
