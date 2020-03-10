import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import { IS_LOGGED_IN, NEW_PROPOSAL, EMAIL_CONSULT } from "../MutationsQueries";
import { openModal, closeModal } from "@redq/reuse-modal";
import LoginModal from "../LoginModal";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import Heading from "reusecore/src/elements/Heading";
import Particles from "../containers/Agency/Particle";
import Text from "reusecore/src/elements/Text";
import Image from "reusecore/src/elements/Image";
import Button from "reusecore/src/elements/Button";
import Input from "common/src/components/Input";
import Alert from "reusecore/src/elements/Alert/index";
// import { CircleLoader } from "../interior.style";
import BannerWrapper, {
  SuccessWrapper,
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea
} from "./banner.style";

import SuccessImage from "common/src/assets/image/Custom-size.svg";

import { bannerData } from "common/src/data/Interior";

const Banner = ({
  greetingStyle,
  greetingStyleTwo,
  priceLabelStyle,
  nameStyle
}) => {
  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  const handleLoginModal = () => {
    e.preventDefault();
    console.log("handleLogin called!");
    openModal({
      config: {
        className: "login-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" },
        animationTo: { transform: "translateY(0)" },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  const { title, text, carousel } = bannerData;
  const glideOptions = {
    type: "carousel",
    perView: 2,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2
      },
      1000: {
        perView: 1
      }
    }
  };

  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    setLoadingState(true);
  }, []);

  const [state, setState] = useState({ email: "", valid: "" });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = e => {
    let value = "";
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: "valid" });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: "invalid" });
      } else {
        setState({ ...state, valid: "" });
      }
    }
  };

  const [
    newProposal,
    { loading: emailLoading, error: emailError, data: emailData, client }
  ] = useMutation(EMAIL_CONSULT, { errorPolicy: "all" });

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);

      newProposal({
        variables: {
          input: {
            email: state.email
          }
        }
      });
    }
  };

  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <ContentArea>
          <Heading as="h1" content={title} {...greetingStyle} />
          <Heading content={text} {...greetingStyleTwo} />
          {!loadingState && (
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <Input
                className="hidden"
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <ButtonGroup className="hidden">
                <>
                  <Button
                    type="submit"
                    colors="primaryWithBg"
                    title="FREE CONSULT"
                  />
                  <Button
                    title="EXPLORE MORE"
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                  />
                </>
              </ButtonGroup>
            </FormWrapper>
          )}
          {loadingState && (
            <Fade bottom delay={10}>
              <FormWrapper onSubmit={handleSubscriptionForm}>
                <Input
                  className={state.valid}
                  type="email"
                  placeholder="Enter email address"
                  icon={<Icon icon={iosEmailOutline} />}
                  iconPosition="left"
                  required={true}
                  onChange={handleOnChange}
                  aria-label="email"
                />
                <ButtonGroup>
                  {emailLoading ? (
                    <>
                      <Button
                        type="submit"
                        colors="primaryWithBg"
                        title="Submiting..."
                        isLoading
                      />
                      <Button
                        title="EXPLORE MORE"
                        variant="textButton"
                        icon={<i className="flaticon-next" />}
                      />
                    </>
                  ) : !emailLoading && emailData !== undefined ? (
                    <>
                      {console.log(emailData)}
                      <SuccessWrapper>
                        <Text
                          className="text"
                          content={`Please look out for an email from us to ${state.email} within 24 hours`}
                          {...priceLabelStyle}
                        />
                        <Button
                          title="EXPLORE MORE"
                          variant="textButton"
                          icon={<i className="flaticon-next" />}
                        />
                      </SuccessWrapper>
                    </>
                  ) : emailError ? (
                    <>
                      {console.log(emailError.graphQLErrors)}
                      {emailError.graphQLErrors !== undefined ? (
                        emailError.graphQLErrors.map(({ message }, i) => (
                          <Button
                            key={i}
                            title={message}
                            variant="textButton"
                            colors="errorWithBg"
                          />
                        ))
                      ) : emailError.networkError !== undefined ? (
                        <>
                          {console.log(emailError.networkError)}
                          <Button
                            title={emailError.networkError}
                            variant="textButton"
                            colors="errorWithBg"
                          />
                        </>
                      ) : (
                        <Button
                          title="Uh-oh - seems there's a problem with the network!"
                          variant="textButton"
                          colors="errorWithBg"
                        />
                      )}

                      <Button
                        title="EXPLORE MORE"
                        variant="textButton"
                        icon={<i className="flaticon-next" />}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        type="submit"
                        colors="primaryWithBg"
                        title="FREE CONSULT"
                      />
                      <Button
                        title="EXPLORE MORE"
                        variant="textButton"
                        icon={<i className="flaticon-next" />}
                      />
                    </>
                  )}
                </ButtonGroup>
              </FormWrapper>
            </Fade>
          )}
        </ContentArea>
        {/* End of content section */}
        <CarouselArea>
          <Image
            src={SuccessImage}
            className="man_image_area"
            alt="Man Image"
          />
        </CarouselArea>
      </Container>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  greetingStyle: PropTypes.object,
  greetingStyleTwo: PropTypes.object
};

Banner.defaultProps = {
  greetingStyle: {
    as: "h1",
    color: "#15172c",
    fontSize: ["36px", "48px", "52px", "72px"],
    fontWeight: "600",
    lineHeight: ["48px", "60px", "65px", "98px"],
    mb: "0px"
  },
  greetingStyleTwo: {
    as: "h2",
    color: "#15172c",
    fontSize: ["30px", "36px", "48px"],
    fontWeight: "400",
    lineHeight: ["40px", "48px", "60px"],
    mb: "8px"
  },
  priceLabelStyle: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    color: "#6e7379",
    lineHeight: "1.75",
    textAlign: "center",
    mb: "0"
  },
  nameStyle: {
    fontSize: ["20px", "20px", "22px", "22px", "22px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    textAlign: "center",
    mb: "12px"
  }
};

export default Banner;
