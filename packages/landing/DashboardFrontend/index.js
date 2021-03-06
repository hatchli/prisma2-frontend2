import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Image from "reusecore/src/elements/Image";
import Heading from "reusecore/src/elements/Heading";
import Fade from "react-reveal/Fade";
import Button from "reusecore/src/elements/Button";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import { SERVICE_LIST } from "common/src/data/Portfolio/data";
import { plus } from "react-icons-kit/feather/plus";
import { Icon } from "react-icons-kit";
// import Particles from '../Particle';
import DashboardWrapper, { DashboardObject } from "./dashboard.style";

import FrontendImage from "common/src/assets/image/DesignSide.svg";

const DashboardSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  learningList,
  listItem,
  listText,
  listTitle,
  learningListArea,
  listIcon
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="FREE TRAIL" {...btnStyle} />
    </Fragment>
  );
  return (
    <DashboardWrapper id="banner_section">
      {/* <Particles /> */}
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading className="subtitle" as="h5" content="WEBSITE DESIGN" />
            <FeatureBlock
              title={
                <Heading
                  content="We Build Thoughfully Designed Websites."
                  {...title}
                />
              }
              description={
                <Text
                  content="Hatchli prides itself in building beutiful websites that encourage your visitors to interact and click through. First impressions are critical online, and visitors who don't feel comfortable will promptly leave in a single tap. We take this very seriously, and always build polished and elegant websites."
                  {...description}
                />
              }
            />
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
                        style={{ color: "#d1397c" }}
                        icon={item.icon || plus}
                        size={item.iconSize || 12}
                        {...listIcon}
                      />
                      <Text as="span" content={item.content} {...listText} />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
      <DashboardObject>
        <Fade right delay={20}>
          <div className="dashboardWrapper">
            <Image src={FrontendImage} alt="Website Design" />
          </div>
        </Fade>
      </DashboardObject>
    </DashboardWrapper>
  );
};

DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listIcon: PropTypes.object,
  listTitle: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object
};

DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, "70%", "60%", "60%"]
  },
  title: {
    fontSize: ["22px", "30px", "30px", "30px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "15px", "15px", "20px", "25px"],
    lineHeight: "1.3",
    maxWidth: ["100%", "500px"]
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.85",
    mb: "0"
  },
  btnStyle: {
    minWidth: ["120px", "120px", "120px", "156px"],
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "primaryWithBg"
  },
  learningListArea: {
    width: ["100%", "100%", "100%", "100%", "100%"],
    mt: ["20px", "15px", "15px", "20px", "25px"],
    flexBox: true,
    flexWrap: "wrap"
  },
  learningList: {
    width: ["100%", "100%", "100%", "100%", "100%"],
    pl: ["0", "0", "15px", "15px", "15x"],
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
    color: "#343d48cc",
    mb: "16px"
  },
  listText: {
    flexBox: true,
    justifyContent: "flex-start",
    fontSize: "16px",
    fontWeight: "400",
    color: "#343d48cc",
    mb: "0",
    ml: "5px"
  },
  listIcon: {
    alignItems: "flex-start"
  }
};

export default DashboardSection;
