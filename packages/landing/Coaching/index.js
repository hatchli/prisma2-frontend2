import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Button from "common/src/components/Button";
import Heading from "common/src/components/Heading";
import FeatureBlock from "common/src/components/FeatureBlock";
import { Features } from "common/src/data/CryptoModern";
import Container from "common/src/components/UI/Container";
import FeatureSectionWrapper from "./coaching.style";
import BtnIcon1 from "common/src/assets/image/cryptoModern/apple.png";
import BtnIcon2 from "common/src/assets/image/cryptoModern/playstore.png";

const Coaching = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle
}) => {
  const router = useRouter();
  return (
    <FeatureSectionWrapper id="coaching">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="Amet Cursus Sit Amet" {...sectionSubTitle} />
          <Heading
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor Lorem ipsum dolor"
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {Features.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                // icon={<img src={feature.icon} />}s
                wrapperStyle={blockWrapperStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
                details={
                  <Text content={feature.details} {...featureDescription} />
                }
                button={
                  <Button
                    className="more_button"
                    title="Learn More"
                    type="button"
                    onClick={() => {
                      router.push("/#contact");
                    }}
                  />
                }
                className="cryptoFeature"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
Coaching.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object
};

// FeatureSection default style
Coaching.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "40px", "40px", "80px"],
    display: "flex",
    width: "100%"
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: ["30px", "40px"],
    fontWeight: "300",
    letterSpacing: "-0.025em",
    color: "#030B16",
    mb: "15px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["14px", "16px"],
    fontWeight: "400",
    color: "#030B16",
    mb: "0",
    maxWidth: "420px",
    lineHeight: "1.5"
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // feature col default style
  col: {
    width: [1, 1 / 2],
    my: ["15px", 0]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"]
  },

  // feature content default style
  contentStyle: {
    textAlign: "center"
  },
  // feature title default style
  featureTitle: {
    // fontSize: ["18px", "20px"],
    fontWeight: "400",
    // color: "#fff",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "15px"],
    letterSpacing: "-0.025em",
    mt: ["15px", "15px", "15px", "25px"]
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.6"
    // color: "rgba(142, 199, 255, 0.502)",
  }
};

export default Coaching;
