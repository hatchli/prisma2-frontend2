import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useToggle from "common/src/components/useToggle";
import Icon from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Container from "common/src/components/UI/Container";
// import SocialProfile from "../SocialProfile";
import BannerWrapper, { SubscriptionForm } from "./banner.style";
import Fade from "react-reveal/Fade";
import Input from "common/src/components/Input";
import Button from "common/src/components/Button";
import CheckBox from "common/src/components/Checkbox";

import { useMutation } from "@apollo/client";
import { REQUEST, SEND_CONFIRM_EMAIL } from "common/src/MutationsQueries";

import { SOCIAL_PROFILES } from "common/src/data/Portfolio/data";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import PersonImage from "common/src/assets/image/portfolio/person.png";
import { check } from "react-icons-kit/feather/check";
import { slash } from "react-icons-kit/feather/slash";

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  // buttonStyle,
  roleStyle,
  roleWrapper,
}) => {
  const [state, setState] = useState({
    email: "",
    valid: "",
    terms: true,
    newsletterSelected: true,
    newsletter: "NEWSLETTER",
  });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    console.log(e);
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
  };

  const [toggleTerms, toggleTermsHandler] = useToggle(false);
  const [toggleNewsletter, toggleNewsletterHandler] = useToggle(false);

  const handleTermsIsChecked = (e) => {
    toggleTermsHandler(!toggleTerms);
    setState({ ...state, terms: toggleTerms });
  };
  const handleNewsletterIsChecked = (e) => {
    toggleNewsletterHandler(!toggleNewsletter);
    if (toggleNewsletter) {
      setState({
        ...state,
        newsletterSelected: toggleNewsletter,
        newsletter: "NEWSLETTER",
      });
    } else if (!toggleNewsletter) {
      setState({
        ...state,
        newsletterSelected: toggleNewsletter,
        newsletter: "",
      });
    }
  };

  const [
    upsertOneRequest,
    { loading: requestLoading, error: requestError, data: requestData },
  ] = useMutation(REQUEST, { errorPolicy: "all" });

  const [
    sendConfirmEmail,
    { loading: confirmLoading, error: confirmError, data: confirmData },
  ] = useMutation(SEND_CONFIRM_EMAIL, {
    errorPolicy: "all",
    onCompleted: () => {
      setState({ ...state, email: "" });
    },
  });

  const handleSubscriptionForm = async (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      await upsertOneRequest({
        variables: {
          where: {
            email: state.email,
          },
          update: {
            email: state.email,
            acceptTerms: state.terms,
            pdf: true,
            newsletter: state.newsletterSelected,
          },
          create: {
            email: state.email,
            acceptTerms: state.terms,
            pdf: true,
            newsletter: state.newsletterSelected,
          },
        },
      });
      await sendConfirmEmail({
        variables: {
          email: state.email,
        },
      });
    }
  };

  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter>
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Sed vulputate..." {...greetingStyle} />
            <Heading content="Sit Amet" {...nameStyle} />
            <Heading content="A cras semper" {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: "#3444f1" }}
                size={22}
              />
              <Heading
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                {...roleStyle}
              />
            </Box>
            {/* <Fade up delay={300}> */}
            <SubscriptionForm>
              <div>
                <Input
                  inputType="email"
                  type="email"
                  placeholder={
                    confirmData || requestData
                      ? "Please Check Your Email"
                      : "Enter Your Email Address"
                  }
                  iconPosition="left"
                  aria-label="email"
                  required
                  onChange={handleOnChange}
                />
                <Button
                  title={
                    confirmLoading ||
                    requestLoading ||
                    requestData ||
                    confirmData ||
                    requestError ||
                    confirmError
                      ? ""
                      : "Get PDF"
                  }
                  className="more_button"
                  type="submit"
                  onClick={handleSubscriptionForm}
                  isLoading={confirmLoading || requestLoading}
                  icon={
                    requestData && confirmData ? (
                      <Icon
                        icon={check}
                        style={{ color: "#fffff" }}
                        // size={22}
                      />
                    ) : confirmError || requestError ? (
                      <Icon
                        icon={slash}
                        style={{ color: "#fffff" }}
                        // size={22}
                      />
                    ) : null
                  }
                  iconPosition="right"
                  // variant="outlined"
                  // {...buttonStyle}
                />
              </div>
              <CheckBox
                id="terms"
                htmlFor="terms"
                onClick={handleTermsIsChecked}
                isChecked={state.terms}
                labelText="I accept the terms and conditions"
                required={true}
              />
              <CheckBox
                id="newsletter"
                htmlFor="newsletter"
                onClick={handleNewsletterIsChecked}
                isChecked={state.newsletterSelected}
                labelText="Sign me up for the newsletter"
                required={false}
              />
            </SubscriptionForm>
            {/* </Fade> */}
            {/* <SocialProfile items={SOCIAL_PROFILES} /> */}
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="Mat Helme" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  contentArea: {
    width: ["100%", "100%", "50%", "50%"],
    p: ["65px 0 40px 0", "65px 0 80px 0", "50px 25px 60px 0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageArea: {
    width: ["100%", "100%", "50%", "50%"],
    flexBox: true,
    alignItems: "flex-end",
  },
  greetingStyle: {
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "24px"],
    fontWeight: "700",
    mb: "8px",
  },
  buttonStyle: {
    // fontFamily: "Raleway",
    // fontSize: ["18px", "18px", "18px", "20px"]
    // fontWeight: "500",
  },
  nameStyle: {
    as: "h2",
    color: "#fff",
    fontSize: ["38px", "38px", "44px", "60px", "80px", "120px"],
    fontWeight: "800",
    mb: "6px",
  },
  designationStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px", "44px"],
    fontWeight: "700",
    mb: ["30px", "30px", "25px", "30px", "30px", "44px"],
  },
  roleWrapper: {
    flexBox: true,
    mb: "28px",
  },
  roleStyle: {
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px", "24px"],
    fontWeight: "500",
    color: "#fff",
    mb: "0",
    ml: "10px",
  },
  aboutStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px", "18px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: "50px",
  },
};

export default BannerSection;
