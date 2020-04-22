import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/properties";
import { ResetCSS } from "common/src/assets/css/style";
import { GlobalStyle, ContentWrapper } from "./theme/myodesign.style";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import { AuthProvider } from "common/src/contexts/AuthContext";
import { NavProvider } from "common/src/contexts/NavContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Myodesign</title>
          <meta name="theme-color" content="#030B16" />
          <meta name="description" content="Description copy goes here" />
          <meta name="keywords" content="SEO Keywords here " />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <ContentWrapper>
          <Sticky
            top={0}
            innerZ={9999}
            activeClass="sticky-nav-active"
            releasedClass="sticky-nav-inactive"
          >
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <AuthProvider>
            {props.children}
            <Footer />
          </AuthProvider>
        </ContentWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
