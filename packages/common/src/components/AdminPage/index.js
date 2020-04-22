import React, { lazy, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { IS_CURRENTLY_LOGGED_IN } from "common/src/MutationsQueries";
import ArticleLoader, { Error } from "common/src/components/Loading/Article";
import { PageWrapper, ContentBox } from "./adminPage.style";
// import CheckConfirmed from "common/src/components/CheckConfirmed/CheckConfirmed";
import Requests from "common/src/components/Requests/";

const AdminPage = () => {
  const [state, setState] = useState(false);
  const { data, loading, error } = useQuery(IS_CURRENTLY_LOGGED_IN);

  useEffect(() => {
    data &&
    data.currentUser !== null &&
    (data.currentUser.role === "ADMIN" || data.currentUser.role === "DEV")
      ? setState(true)
      : null;
  }, [data]);

  return (
    <>
      {state && (
        <PageWrapper id="account">
          {/* <SidebarSection /> */}
          <ContentBox>
            <Requests />
          </ContentBox>
        </PageWrapper>
      )}
    </>
  );
};

export default AdminPage;
