import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { interiorTheme } from "common/src/theme/interior";
import { DrawerProvider } from "common/src/contexts/DrawerContext";
import Navbar from "../containers/Interior/Navbar";
import RideOption from "../containers/Ride/RideOption";
import Feature from "../containers/Interior/Feature";
import Banner from "../containers/Interior/Banner";
import Project from "../containers/Interior/Project";
import Newsletter from "../containers/SaasClassic/Newsletter";
import Footer from "../containers/SaasClassic/Footer";
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
          <title>Hatchli | Prisma2 Proof of Concept</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="Web Developer Full Stack" />
          <meta
            name="keywords"
            content="React, Next, Javascript, MySQL, SQL, Prisma, Prisma2, GraphQL, Apollo, Yoga"
          />
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
            <Feature />
            <RideOption />
            <Project />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
