import React from "react";
import PropTypes from "prop-types";

import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";

import Container from "common/src/components/UI/Container";

import ProcessItem from "./process.style";
import { PROCESS_STEPS } from "common/src/data/Portfolio/data";

const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="process_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            {...secTitle}
            content="From Lean Design Sprints to Agile Development"
          />
          <Text
            {...secDescription}
            content="Our process is designed to give you the best shot at success."
          />
        </Box>

        <Box {...processRow}>
          {PROCESS_STEPS.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <Image
                  src={item.image}
                  alt={`process-image-${index + 1}`}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                <Text content={item.description} {...processDescriptionStyle} />
              </ProcessItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

ProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object
};

ProcessSection.defaultProps = {
  sectionWrapper: {
    // pt: ["60px", "80px", "90px", "100px"],
    // pb: ["10px", "40px", "30px"]
  },
  secTitleWrapper: {
    mb: ["30px", "60px"]
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center"
  },
  processRow: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["0", "-15px", "-30px", "-70px", "-70px"],
    mr: ["0", "-15px", "-30px", "-70px", "-70px"]
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ["0", "15px", "30px", "70px", "70px"],
    pr: ["0", "15px", "30px", "70px", "70px"],
    mb: "40px"
  },
  processImageStyle: {
    ml: "auto",
    mr: "auto",
    mb: "35px"
  },
  processTitleStyle: {
    fontSize: ["20px", "18px", "20px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    textAlign: "center",
    mb: ["20px", "20px", "27px", "27px", "27px"]
  },
  processDescriptionStyle: {
    fontSize: ["15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    textAlign: "center",
    lineHeight: "1.5"
  }
};

export default ProcessSection;
