import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { interiorTheme } from "common/src/theme/interior";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import Navbar from "../Navbar";
import ProcessSection from "../Process";
import DashboardFrontend from "../DashboardFrontend";
import DashboardBackend from "../DashboardBackend";
// import Feature from "../containers/Interior/Feature";
import Banner from "../Banner";
import Project from "../Project";
import Pricing from "../Pricing";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

import { ResetCSS } from "common/src/assets/css/style";
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper
} from "../containers/Interior/interior.style";

export default () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Hatchli | Serverless Web Design</title>
          <meta name="theme-color" content="#FECE2F" />
          <meta name="description" content="Web Developer Full Stack" />
          <meta name="keywords" content="website developer design custom " />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <ProcessSection />
            <DashboardFrontend />

            <DashboardBackend />
            <Project />
            <Pricing />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
