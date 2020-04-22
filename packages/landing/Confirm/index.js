import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { EMAIL_CONFIRM, CONFIRMED } from "common/src/MutationsQueries";
import ArticleLoader, { Error } from "common/src/components/Loading/Article";
import { PageWrapper, ContentBox } from "./confirm.style";
// import CheckConfirmed from "common/src/components/CheckConfirmed/CheckConfirmed";
import useWindowSize from "common/src/hooks/useWindowSize";
import Render from "common/src/components/PDF/Render";

const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const Confirm = () => {
  const { width, height } = useWindowSize();
  const navheight =
    width <= 575
      ? 60
      : width <= 768
      ? 80
      : width <= 990
      ? 100
      : width <= 1440
      ? 140
      : 180;
  const [state, setState] = useState(false);
  const targetRef = React.useRef(null);
  const router = useRouter();

  if (!router) {
    return null;
  }
  console.log(height);
  console.log(navheight);
  const { query } = useRouter();
  const {
    loading: localLoading,
    error: localError,
    data: localData,
  } = useQuery(CONFIRMED, {
    onError: () => {
      console.log("Email confirmation not in cache");
    },
  });
  console.log("localData floating", localData);

  const [emailConfirm, { loading, data, error, client }] = useMutation(
    EMAIL_CONFIRM,
    {
      update(cache, { data: { emailConfirm } }) {
        cache.writeQuery({
          query: CONFIRMED,
          data: {
            confirmed: {
              emailConfirmed: true,
            },
          },
        });
      },
      onCompleted: () => {
        console.log("confirm", emailConfirm);
        console.log("data", data);
        console.log("client", client.cache);
        setState(true);
        router.push("/#pdf");
      },
      onError: (error) => {
        console.log("something went wong", error);
      },
    }
  );

  const localHandler = () => {
    setState(true);
    console.log("localData", localData);
    router.push("/#pdf");
  };

  useEffect(() => {
    localData && localData.confirmed && localData.confirmed.emailConfirmed
      ? localHandler()
      : query.token
      ? emailConfirm({
          variables: { emailConfirmToken: query.token },
        }).then(() => {
          console.log("confirm was run");
          console.log("confirm", confirm);
          console.log("client2", client.cache);
          console.log("localData", localData);
        })
      : null;
  }, [query]);

  return (
    <>
      {state && (
        <PageWrapper id="pdf" className="sticky-nav-inactive">
          <ContentBox>
            {loading && <ArticleLoader />}
            {(error || localError) && <Error />}
            {/* <ArticleLoader /> */}
            {((localData &&
              localData.confirmed &&
              localData.confirmed.emailConfirmed === true) ||
              data) && (
              <Render pageheight={height - navheight - 100} pagewidth={width} />
            )}
            {/* <Render pageheight={height - navheight - 100} pagewidth={width} /> */}
            {/* <a href="public/graphql.pdf" target="__blank">
                  Download PDF
                </a> */}
          </ContentBox>
        </PageWrapper>
      )}
    </>
  );
};

export default Confirm;
