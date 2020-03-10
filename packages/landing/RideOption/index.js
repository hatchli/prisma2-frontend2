import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Container from "common/src/components/UI/Container";
import Button from "reusecore/src/elements/Button";
import { OptionWrapper } from "./rideOption.style";
import BackendImage from "common/src/assets/image/Backend.svg";
import FrontendImage from "common/src/assets/image/DesignSide.svg";
import { SERVICE_LIST } from "common/src/data/Portfolio/data";
import { plus } from "react-icons-kit/feather/plus";
import { Icon } from "react-icons-kit";

const SkillSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  col1,
  col2,
  desTitleWrapper,
  rideTitle,
  desOnHover,
  desDetails,
  subDetails,
  button1,
  button2,
  learningList,
  listItem,
  listText,
  listTitle,
  learningListArea,
  listIcon
}) => {
  const [leftState, setLeftState] = useState({
    active: false
  });
  const [rightState, setRightState] = useState({
    active: false
  });
  const activeStatusLeft = leftState.active;
  const activeStatusRight = rightState.active;

  return (
    <OptionWrapper id="ride_section">
      <Box {...sectionWrapper} as="section">
        <Container noGutter mobileGutter width="1200px" className="container">
          {/* <Box {...secTitleWrapper}>
            <Heading {...secTitle} content="Fullstack Development" />
            <Text
              {...secDescription}
              content="You will have complete control of your website's design, server and database"
            />
            <Text
              {...secDescription}
              content="Any feature or experience you can imagine is possible!"
            />
          </Box> */}

          <Box {...row}>
            <Box
              {...col}
              {...col1}
              className={
                activeStatusLeft ? "frontendBlock active-item" : "frontendBlock"
              }
              onMouseEnter={() => setLeftState({ active: true })}
              onMouseLeave={() => setLeftState({ active: false })}
            >
              <Box
                {...desTitleWrapper}
                className="desTitleWrapper desTitleWrapperLeft"
              >
                <Heading
                  {...rideTitle}
                  content="Frontend"
                  className="desTitle"
                />
                <Text
                  {...subDetails}
                  className="desDetailsFirst"
                  content="We Build Thoughfully Designed Websites"
                />
                <Text {...desDetails} className="desDetailsFirst" content="" />
                <Box {...desOnHover} className="desOnHover desOnHoverLeft">
                  <Text
                    {...desDetails}
                    className="desDetailsFirst"
                    content="A beutiful website that encourages your visitors to interact -."
                  />
                  <Text {...desDetails} content="Find Riders around you!" />
                  <Link href="#services">
                    <a className="buttonStyle">
                      <Button title="Learn More" {...button1} />
                    </a>
                  </Link>
                  <Link href="#services">
                    <a className="buttonStyle signupBtn">
                      <Button title="Sign up for ride" {...button2} />
                    </a>
                  </Link>
                </Box>
              </Box>
              <Image
                src={FrontendImage}
                className="frontend_image_area"
                alt="Frontend Image"
              />
            </Box>
            <Box
              {...col}
              {...col2}
              className={
                activeStatusRight === true
                  ? "backendBlock active-item"
                  : "backendBlock"
              }
              onMouseEnter={() => setRightState({ active: true })}
              onMouseLeave={() => setRightState({ active: false })}
            >
              <Image
                src={BackendImage}
                className="backend_image_area"
                alt="Backend Image"
              />
              <Box
                {...desTitleWrapper}
                className="desTitleWrapper desTitleWrapperRight"
              >
                <Heading
                  {...rideTitle}
                  content="Backend"
                  className="desTitle"
                />
                <Text
                  {...subDetails}
                  className="desDetailsFirst"
                  content="Your Website Brought to Life"
                />
                <Box {...desOnHover} className="desOnHover ">
                  {/* <Text
                    {...desDetails}
                    className="desDetailsFirst"
                    content="Dream big - a powerful website can do a lot."
                  /> */}
                  <Box {...learningListArea}>
                    {SERVICE_LIST.filter(
                      service => service.title === "UI/UX Design"
                    ).map((serviceList, index) => (
                      <Box {...learningList} key={`serviceList-${index}`}>
                        {/* <Heading
                          content="Dream big - a powerful website can do a lot."
                          {...listTitle}
                        /> */}
                        {serviceList.listItems.map((item, index) => (
                          <Box {...listItem} key={`list-item-${index}`}>
                            <Icon
                              icon={item.icon || plus}
                              size={item.iconSize || 12}
                              {...listIcon}
                            />
                            <Text
                              as="span"
                              content={item.content}
                              {...listText}
                            />
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                  <Link href="#services">
                    <a className="buttonStyle signupBtn">
                      <Button title="Sign up for ride" {...button2} />
                    </a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </OptionWrapper>
  );
};

SkillSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  desTitleWrapper: PropTypes.object,
  rideTitle: PropTypes.object,
  desOnHover: PropTypes.object,
  desDetails: PropTypes.object,
  button1: PropTypes.object,
  button2: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listIcon: PropTypes.object,
  listTitle: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object
};

SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "90px", "120px"],
    pb: ["60px", "90px", "120px"]
  },
  secTitleWrapper: {
    mb: ["65px"]
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "36px"],
    fontWeight: "600",
    color: "#15172C",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "30px"],
    textAlign: "center"
    // fontFamily: "Poppins"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#15172C",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto"
    // fontFamily: "Lato"
  },
  rideTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "36px"],
    fontWeight: "600",
    color: "#15172C",
    lineHeight: "1.34",
    // mb: ["15px", "18px", "18px"],
    textAlign: "center"
    // fontFamily: "Poppins"
  },
  subDetails: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    pb: ["15px", "18px", "18px"],
    fontWeight: "400",
    color: "#15172C",
    lineHeight: "1.5",
    mb: "0",
    maxWidth: "60%"
    // fontFamily: "Lato"
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    overflow: "hidden"
  },
  col: {
    width: "100%",
    bg: "#fcfcfc",
    pt: ["50px", "50px", "50px"],
    // pb: ["50px", "50px", "50px"],

    flexBox: true
  },
  col1: {
    pl: ["30px", "30px", "50px", "85px", "85px"]
  },
  col2: {
    pr: ["20px", "20px", "40px", "85px", "85px"]
  },
  desTitleWrapper: {
    flexBox: true,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  },

  desOnHover: {
    textAlign: "right",
    width: "100%"
  },
  desDetails: {
    fontSize: ["14px", "14px", "16px", "16px", "19px"],
    fontWeight: "400",
    color: "#15172C",
    lineHeight: "1.5",
    mb: "0",
    maxWidth: "100%"
    // fontFamily: "Lato"
  },

  button1: {
    type: "button",
    fontSize: "16px",
    fontWeight: "700",
    // fontFamily: "Lato",
    color: "#000",
    border: "0",
    minHeight: "55px",
    p: "0",
    bg: "tarnsperant"
  },
  button2: {
    type: "button",
    fontSize: "16px",
    fontWeight: "700",
    // fontFamily: "Lato",
    color: "#1A73E8",
    border: "0",
    minHeight: "auto",
    p: "0"
  },
  learningListArea: {
    width: ["100%", "100%", "100%", "100%", "60%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  learningList: {
    width: ["100%", "100%", "100%", "100%", "100%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "30px", "0", "0", "0"],
    flexBox: true,
    flexDirection: "column"
    // mb: ["40px", "40px", "60px", "80px", "90px"]
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#302b4e"
    // mb: "25px"
  },
  listItem: {
    flexBox: true,
    flexDirection: "row",
    color: "#43414e",
    mb: "16px"
  },
  listText: {
    flexBox: true,
    justifyContent: "flex-start",
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    mb: "0",
    ml: "5px"
  },
  listIcon: {
    alignItems: "flex-start"
  }
};

export default SkillSection;
