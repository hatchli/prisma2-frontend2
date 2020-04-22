import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import useToggle from "common/src/components/useToggle";
import Icon from "react-icons-kit";
import Container from "common/src/components/UI/Container";
import CheckBox from "common/src/components/Checkbox";
import Heading from "common/src/components/Heading";
import Button from "common/src/components/Button";
import Input from "common/src/components/Input";
import Image from "common/src/components/Image";
import Text from "common/src/components/Text";

import { check } from "react-icons-kit/feather/check";
import { slash } from "react-icons-kit/feather/slash";

import { useMutation } from "@apollo/client";
import { REQUEST } from "common/src/MutationsQueries";

import SectionWrapper, {
  FooterInner,
  Content,
  SubscriptionForm,
} from "./subscribe.style";

// import bg1 from "common/src/assets/image/agencyModern/cta/1.png";
// import bg2 from "common/src/assets/image/agencyModern/cta/2.png";
// import bg3 from "common/src/assets/image/agencyModern/cta/3.png";
// import bg4 from "common/src/assets/image/agencyModern/cta/4.png";
// import bg5 from "common/src/assets/image/agencyModern/cta/5.png";

const Subscribe = () => {
  const [state, setState] = useState({ email: "", valid: "", terms: true });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [toggleTerms, toggleTermsHandler] = useToggle(false);
  const handleTermsIsChecked = (e) => {
    toggleTermsHandler(!toggleTerms);
    setState({ ...state, terms: toggleTerms });
  };
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
  const [
    upsertOneRequest,
    { loading, error, data, client },
  ] = useMutation(REQUEST, { errorPolicy: "all" });

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);

      upsertOneRequest({
        variables: {
          where: {
            email: state.email,
          },
          update: {
            email: state.email,
            acceptTerms: state.terms,
            newsletter: true,
          },
          create: {
            email: state.email,
            acceptTerms: state.terms,
            newsletter: true,
          },
        },
      });
    }
  };

  return (
    <SectionWrapper>
      <Container>
        <FooterInner>
          <Fade left delay={100}>
            <Content>
              <Heading as="h3" content="Like our service? Subscribe us" />
              <Text content="We have more than thousand of creative entrepreneurs and stat joining our business" />
            </Content>
          </Fade>
          <Fade right delay={100}>
            <SubscriptionForm>
              <div>
                <Input
                  inputType="email"
                  placeholder="Enter Email Address"
                  iconPosition="left"
                  aria-label="email"
                  required
                  onChange={handleOnChange}
                />
                <Button
                  title={loading || data || error ? "" : "Subscribe"}
                  isLoading={loading}
                  type="submit"
                  onClick={handleSubscriptionForm}
                  icon={
                    data ? (
                      <Icon
                        icon={check}
                        style={{ color: "#fffff" }}
                        // size={22}
                      />
                    ) : error ? (
                      <Icon
                        icon={slash}
                        style={{ color: "#fffff" }}
                        // size={22}
                      />
                    ) : null
                  }
                  iconPosition="right"
                />
              </div>
              <CheckBox
                id="newsletter_terms"
                htmlFor="newsletter_terms"
                onClick={handleTermsIsChecked}
                isChecked={state.terms}
                labelText="I accept the terms and conditions"
                required={true}
              />
            </SubscriptionForm>
          </Fade>
        </FooterInner>
      </Container>
      {/* <Image src={bg1} alt="bg1" className="illustration bg1" />
      <Image src={bg2} alt="bg2" className="illustration bg2" />
      <Image src={bg3} alt="bg3" className="illustration bg3" />
      <Image src={bg4} alt="bg4" className="illustration bg4" />
      <Image src={bg5} alt="bg5" className="illustration bg5" /> */}
    </SectionWrapper>
  );
};

export default Subscribe;
