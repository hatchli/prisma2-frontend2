import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { REQUEST } from "common/src/MutationsQueries";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import { ContactFormWrapper } from "./CheckConfirmed.style";

const CheckConfirmed = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description
}) => {
  const [getConfirmed, { loading, error, data, client }] = useLazyQuery(
    EMAIL_CONFIRMED,
    {
      variables: { email: state.email },
      update: (store, { data: { emailConfirmed } })
    }
  );
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
  console.log(data, "data");
  return (
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
          isLoading={loading ? true : false}
          onClick={() => getConfirmed()}
          disabled={
            data !== undefined || state.valid == ("invalid" || "" || null)
              ? true
              : false
          }
          color={error ? error : null}
          title={
            error
              ? "Oh no, something went wrong!"
              : data !== undefined &&
                data.emailConfirmed.length > 0 &&
                data.emailConfirmed[0].emailConfirmed
              ? "Your email is confirmed, thank you!"
              : data !== undefined && data.emailConfirmed.length === 0
              ? "Oh no, your email hasn't been confirmed yet!"
              : data == undefined
              ? "Check If Confirmed"
              : "Hmm... somethings not right"
          }
        />
      </ContactFormWrapper>
    </Box>
  );
};

CheckConfirmed.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object
};

CheckConfirmed.defaultProps = {
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

export default CheckConfirmed;
