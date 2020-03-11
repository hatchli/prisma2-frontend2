import React, { Fragment } from "react";
import ProcessSection from "../Process";
import DashboardFrontend from "../DashboardFrontend";
import DashboardBackend from "../DashboardBackend";
import Banner from "../Banner";
import Project from "../Project";
import Pricing from "../Pricing";
// import HomePage from "packages/shop/pages/index.tsx";

export default () => {
  return (
    <>
      <Banner />
      {/* <HomePage /> */}
      <ProcessSection />
      <DashboardFrontend />
      <DashboardBackend />
      <Project />
      <Pricing />
    </>
  );
};
