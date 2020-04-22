import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { REQUEST } from "common/src/MutationsQueries";
import Link from "next/link";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Image from "common/src/components/Image";
import Container from "common/src/components/UI/Container";
import SingleInputGroup from "common/src/components/SingleInputGroup";
import InputGroup from "common/src/components/InputGroup";
import RadioGroup from "common/src/components/RadioGroup";
import { Icon } from "react-icons-kit";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import { iosContactOutline } from "react-icons-kit/ionicons/iosContactOutline";
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  DonationForm,
  DonateButton,
} from "./coachingForm.style";

import { coaching, contactOptions } from "common/src/data/Charity";
// import heartImage from "common/src/assets/image/charity/heart-alt.svg";

const CoachingForm = ({ row, col }) => {
  const [state, setState] = useState({
    phone: "",
    email: "",
    coaching: "REMOTE",
    valid: "",
    contact: "TEXT",
    description: "",
  });

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleOnChange = (e) => {
    let value = "";
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        value = e;
        setState({ ...state, email: value, valid: "valid" });
        console.log("state.email", state.email);
      }
    } else {
      if (e.length > 0) {
        setState({ ...state, valid: "invalid" });
      } else {
        setState({ ...state, valid: "" });
      }
    }
  };
  const handleFormData = (value, name) => {
    console.log("value", value, "name", name);
    setState({
      ...state,
      [name]: value,
    });
  };
  const [
    upsertOneRequest,
    { loading, error, data, client },
  ] = useMutation(REQUEST, { errorPolicy: "all" });

  const handleDonation = (e) => {
    e.preventDefault();
    console.log("Donation form data: ", state);

    upsertOneRequest({
      variables: {
        where: {
          email: state.email,
        },
        update: {
          email: state.email,
          phone: state.phone,
          contact: state.contact,
          coaching: true,
          Type: {
            create: {
              name: state.coaching,
              description: state.description,
            },
          },
        },
        create: {
          email: state.email,
          phone: state.phone,
          contact: state.contact,
          coaching: true,
          Type: {
            create: {
              name: state.coaching,
              description: state.description,
            },
          },
        },
      },
    });
  };

  return (
    <SectionWrapper id="contact">
      <Container width="1260px">
        <Box className="row" {...row}>
          {/* <Box className="col" {...col}> */}
          {/* <ContentArea>
              <Heading>
                Would You like to <span>Help people</span> Across the Globe?
              </Heading>
              <Text content="Data from January 1 through November 30, 2018" />
              <ButtonGroup>
                <Link href="#">
                  <a className="learn__more-btn alt">
                    <span className="hyphen" />
                    <span className="btn_text">Funding Progress</span>
                  </a>
                </Link>
                <Text content="or" />
                <Link href="#">
                  <a className="learn__more-btn">
                    <span className="hyphen" />
                    <span className="btn_text">Join our Organizations</span>
                  </a>
                </Link>
              </ButtonGroup>
            </ContentArea> */}
          {/* </Box> */}
          <Box className="col" {...col}>
            <DonationForm onSubmit={(e) => handleDonation(e)}>
              <SingleInputGroup
                className={`${state.valid} email`}
                inputType="email"
                placeholder="Enter Your Email Address"
                inputValue={state.email}
                // icon={<Icon icon={iosEmailOutline} />}
                // iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <SingleInputGroup
                className="description"
                rows="3"
                inputType="textarea"
                placeholder="I am looking to..."
                inputValue={state.description}
                // icon={<Icon icon={iosEmailOutline} />}
                // iconPosition="left"
                required={false}
                onChange={(e) => handleFormData(e, "description")}
                aria-label="goals"
              />
              <InputGroup
                inputType="number"
                placeholder="Enter Your Phone Number"
                inputValue={state.phone}
                inputOnChange={(e) => handleFormData(e.target.value, "phone")}
                selectionPlaceholder="Text Me"
                selectedValue={state.contact}
                selectOptions={contactOptions}
                selectOnUpdate={(value) => handleFormData(value, "contact")}
              />
              <RadioGroup
                name="radioGroup"
                value={state.coaching}
                items={coaching}
                onUpdate={(value) => handleFormData(value, "coaching")}
              />
              <DonateButton type="submit">Call To Action</DonateButton>
            </DonationForm>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// DonateSection style props
CoachingForm.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textStyle: PropTypes.object,
};

// DonateSection default style
CoachingForm.defaultProps = {
  // DonateSection row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    justifyContent: "center",
  },
  // DonateSection col default style
  col: {
    width: ["70%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
};

export default CoachingForm;
