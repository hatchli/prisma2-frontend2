import React, { Fragment } from "react";
import { Modal } from "@redq/reuse-modal";
import { ApolloProvider } from "@apollo/client";
import client from "../withData";
import "@redq/reuse-modal/es/index.css";

export default ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <Modal />
        <Component {...pageProps} />
      </Fragment>
    </ApolloProvider>
  );
};
