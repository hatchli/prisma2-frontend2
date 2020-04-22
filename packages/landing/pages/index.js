import React, { useContext, useEffect } from "react";
import Banner from "../Banner";
import Coaching from "../Coaching";
import CoachingForm from "../CoachingForm";
import Confirm from "../Confirm";
import { useQuery } from "@apollo/client";
import { AuthContext } from "common/src/contexts/AuthContext";

// import CheckConfirmed from "common/src/components/CheckConfirmed";
// import Services from "../containers/AgencyModern/Services";
// import Features from "../containers/AgencyModern/Features";
// import WorkHard from "../containers/AgencyModern/WorkHard";
// import UltimateFeature from "../containers/AgencyModern/UltimateFeature";
// import Customer from "../containers/AgencyModern/Customer";
// import News from "../containers/AgencyModern/News";
import Subscribe from "../Subscribe";
import { IS_CURRENTLY_LOGGED_IN } from "common/src/MutationsQueries";
import AdminPage from "common/src/components/AdminPage";
// import HomePage from "packages/shop/pages/index.tsx";

export default () => {
  const { state, dispatch } = useContext(AuthContext);
  const {
    data: { currentUser },
  } = useQuery(IS_CURRENTLY_LOGGED_IN);
  useEffect(() => {
    currentUser &&
    currentUser.role &&
    (currentUser.role === "DEV" || currentUser.role === "ADMIN")
      ? dispatch({
          type: "AUTH",
        })
      : dispatch({
          type: "INAUTH",
        });
  }, [currentUser]);
  return (
    <>
      <Banner />
      <Confirm />
      <Coaching />
      <CoachingForm />
      {/* <Services />
      <Features />
      <WorkHard />
      <UltimateFeature />
      <Customer />
      <News /> */}
      {/* {state.isAuth && <AdminPage />} */}
      <Subscribe />
      {/* <HomePage /> */}
      {/* <ProcessSection /> */}
      {/* <DashboardFrontend /> */}
      {/* <DashboardBackend /> */}
      {/* <Project /> */}
      {/* <Pricing /> */}
    </>
  );
};
