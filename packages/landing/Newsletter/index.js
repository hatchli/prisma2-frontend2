import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import Container from "common/src/components/UI/Container";
import { useMutation } from "@apollo/client";
import { EMAIL_CONSULT } from "common/src/MutationsQueries";

import NewsletterWrapper, { ContactFormWrapper } from "./newsletter.style";
import { border } from "styled-system";

const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description
}) => {
  const handleOnChange = e => {
    let value = "";
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        value = e;
        setState({ ...state, email: value, valid: "valid" });
      }
    } else {
      if (e.length > 0) {
        setState({ ...state, valid: "invalid" });
      } else {
        setState({ ...state, valid: "" });
      }
    }
    console.log(state);
  };

  const [state, setState] = useState({ email: "", valid: "" });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [
    newProposal,
    { loading: emailLoading, error: emailError, data: emailData, client }
  ] = useMutation(EMAIL_CONSULT, { errorPolicy: "all" });

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log("it matched", state.email);
      newProposal({
        variables: {
          input: {
            email: state.email
          }
        }
      });
    }
    console.log(emailData);
  };

  return (
    <>
      <Box {...sectionWrapper} as="section">
        <Container>
          <NewsletterWrapper>
            <Box {...textArea}>
              <Heading content="Contact Us" {...title} />
              <Text
                content="Let's get started building your custom website! From a simple landing page to a full-blown service-focused website, Hatchli can be the one-stop solution for your online needs."
                {...description}
              />
            </Box>
            <Box {...buttonArea}>
              <ContactFormWrapper>
                <Input
                  className={`${state.valid} email_input`}
                  type="email"
                  inputType="email"
                  label="Email address"
                  iconPosition="right"
                  isMaterial={true}
                  onChange={handleOnChange}
                />
                <Button
                  {...buttonStyle}
                  isLoading={emailLoading ? true : false}
                  onClick={handleSubscriptionForm}
                  disabled={
                    emailData !== undefined ||
                    state.valid == ("invalid" || "" || null)
                      ? true
                      : false
                  }
                  color={emailError ? error : null}
                  title={
                    emailError
                      ? "Oh no, something went wrong!"
                      : emailData !== undefined
                      ? "THANK YOU!"
                      : "FREE CONSULT"
                  }
                />
              </ContactFormWrapper>
            </Box>
          </NewsletterWrapper>
        </Container>
      </Box>
    </>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object
};

Newsletter.defaultProps = {
  sectionWrapper: {
    pt: ["50px"],
    mt: ["15px", "150px"]
  },
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "100px"]
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em"
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"]
  },
  buttonArea: {
    zIndex: 1
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    colors: "secondaryWithBg",
    boderedColor: "white",
    color: "#03103b"
  }
};

export default Newsletter;
