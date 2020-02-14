import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../../MutationsQueries";
import { openModal, closeModal } from "@redq/reuse-modal";
import LoginModal from "../LoginModal";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import Heading from "reusecore/src/elements/Heading";
import Particles from "../../Agency/Particle";
import Text from "reusecore/src/elements/Text";
import Image from "reusecore/src/elements/Image";
import Button from "reusecore/src/elements/Button";
import Input from "common/src/components/Input";
import GlideCarousel from "common/src/components/GlideCarousel";
import GlideSlide from "common/src/components/GlideCarousel/glideSlide";
import { CircleLoader } from "../interior.style";
import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea
} from "./banner.style";

import { bannerData } from "common/src/data/Interior";

const Banner = ({ greetingStyle, onClick }) => {
  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  const handleLoginModal = () => {
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

  const { loading, error, data } = useQuery(IS_LOGGED_IN);

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

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: "", valid: "" });
    }
  };

  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <Heading as="h1" content={title} {...greetingStyle} />
            <Text content={text} />
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
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loadingState ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map(item => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    {item.users_only === true && data.isLoggedIn === false ? (
                      <Link scroll={false}>
                        <a onClick={handleLoginModal} className="item_wrapper">
                          <Image src={item.thumb_url} alt={item.title} />
                          <Heading as="h4" content={item.title} />
                        </a>
                      </Link>
                    ) : (
                      <Link href={item.link}>
                        <a className="item_wrapper">
                          <Image src={item.thumb_url} alt={item.title} />
                          <Heading as="h4" content={item.title} />
                        </a>
                      </Link>
                    )}
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  greetingStyle: PropTypes.object
};

Banner.defaultProps = {
  greetingStyle: {
    as: "h1",
    color: "#15172c",
    fontSize: ["52px", "60px", "74px", "88px", "92px"],
    fontWeight: "600",
    lineHeight: ["60px", "48px", "60px", "65px", "98px"],
    mb: "0px"
  }
};

export default Banner;
