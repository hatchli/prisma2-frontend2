import React, { Fragment, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  IS_LOGGED_IN,
  IS_CURRENTLY_LOGGED_IN
} from "../../../MutationsQueries";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Input from "reusecore/src/elements/Input";
import CheckBox from "reusecore/src/elements/Checkbox/index";
import Button from "reusecore/src/elements/Button";
import Image from "reusecore/src/elements/Image";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import LogoImage from "common/src/assets/image/hatchli-reduced-logo.svg";
import LoginImage from "common/src/assets/image/agency/login-bg.jpg";
import FailedLogin from "common/src/assets/image/mirage-logged-out.svg";
import SignedInImage from "common/src/assets/image/mirage-message-sent.svg";
import Loader from "reusecore/src/elements/Loader/index.js";
import Alert from "reusecore/src/elements/Alert/index";

const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
  warningWithBg
}) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState({ email: "", valid: "" });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = e => {
    let value = "";
    console.log(e);
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        value = e;
        setEmail({ ...email, email: value, valid: "valid" });
      }
    } else {
      if (e.length > 0) {
        setEmail({ ...email, valid: "invalid" });
      } else {
        setEmail({ ...email, valid: "" });
      }
    }
  };

  const loggedIn = useQuery(IS_LOGGED_IN);
  const userCurrentlyLoggedIn = useQuery(IS_CURRENTLY_LOGGED_IN);

  const [
    login,
    {
      loading: loadingLogin,
      error: errorLogin,
      data: dataLogin,
      client: clientLogin
    }
  ] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
    async onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      const currentLoggedIn = await login.user;
      clientLogin.writeData({
        data: {
          isLoggedIn: true,
          user: {
            name: currentLoggedIn.name,
            user_id: currentLoggedIn.user_id,
            email: currentLoggedIn.email,
            token: login.token
          }
        }
      });
    }
  });

  const [
    signup,
    {
      loading: loadingSignup,
      error: errorSignup,
      data: dataSignup,
      client: clientSignup
    }
  ] = useMutation(SIGNUP_MUTATION, {
    variables: { name, email: email.email, password },
    async onCompleted({ signup }) {
      console.log("name", name, "email", email, "password", password);
      console.log("signup", signup);
      localStorage.setItem("token", signup.token);
      const currentSignUp = await signup.user;
      console.log("currentSignUp", currentSignUp);
      console.log("clientSignup", clientSignup);
      clientSignup.writeData({
        data: {
          isLoggedIn: true,
          user: {
            name: currentSignUp.name,
            user_id: currentSignUp.user_id,
            email: currentSignUp.email,
            token: signup.token
          }
        }
      });
    },
    onError(error) {
      console.log("error", error);
      console.log("name", name, "email", email, "password", password);
    }
  });

  const LoginButtonGroup = () => {
    return (
      <Fragment>
        {loadingLogin ? (
          <Loader />
        ) : (
          <Button
            className="default"
            title="LOGIN"
            onClick={() => {
              login().then();
            }}
            {...btnStyle}
          />
        )}
        <Button
          title="Forget Password"
          variant="textButton"
          {...outlineBtnStyle}
        />
      </Fragment>
    );
  };
  const SignupButtonGroup = () => (
    <Fragment>
      {loadingSignup ? (
        <Loader />
      ) : (email.valid === "invalid") | (email.valid == "") ? (
        <Button
          className="default"
          title="REGISTER"
          disabled
          onClick={() => signup()}
          {...btnStyle}
        />
      ) : (
        <Button
          className="default"
          title="REGISTER"
          onClick={() => signup()}
          {...btnStyle}
        />
      )}
    </Fragment>
  );

  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image className="patternImage" src={LoginImage} alt="Login Banner" />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage} {...logoStyle} alt="Logo" />
            <Tabs
              defaultActiveKey="registerForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="REGISTER" key="registerForm">
                {loadingSignup && (
                  <Heading content="Loading..." {...titleStyle} />
                )}
                {errorSignup && !userCurrentlyLoggedIn && (
                  <>
                    <Alert>
                      {console.log(errorSignup)}
                      {errorSignup.graphQLErrors.map(({ message }, i) => (
                        <span key={i}>{message}</span>
                      ))}
                    </Alert>
                    <Text
                      content="Please signup with your personal account information."
                      {...descriptionStyle}
                    />
                  </>
                )}
                {!loadingSignup && userCurrentlyLoggedIn.data === undefined && (
                  <>
                    <Heading content="Register" {...titleStyle} />
                    <Text
                      content="Please signup with your personal account information."
                      {...descriptionStyle}
                    />
                  </>
                )}
                {!loadingSignup &&
                  !errorSignup &&
                  userCurrentlyLoggedIn.data !== undefined && (
                    <>
                      <Heading
                        content={`Welcome ${userCurrentlyLoggedIn.data.user.name}!`}
                        {...titleStyle}
                      />
                      <Text
                        content={`Not ${userCurrentlyLoggedIn.data.user.name}? Register below!`}
                        {...descriptionStyle}
                      />
                    </>
                  )}
                <Input
                  isMaterial
                  label="Full Name"
                  inputType="text"
                  required={true}
                  onChange={value => setName(value)}
                />
                <Input
                  inputType="email"
                  className={email.valid}
                  onChange={handleOnChange}
                  isMaterial
                  required={true}
                  label="Email Address"
                />
                <Input
                  inputType="password"
                  onChange={value => setPassword(value)}
                  isMaterial
                  label="Password"
                  required={true}
                />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="LOGIN" key="loginForm">
                {loadingLogin ? (
                  <Heading content="Loading" {...titleStyle} />
                ) : errorLogin ? (
                  <Alert>
                    {errorLogin.graphQLErrors.map(({ message }, i) => (
                      <span key={i}>{message}</span>
                    ))}
                  </Alert>
                ) : !errorLogin && userCurrentlyLoggedIn.data !== undefined ? (
                  <Heading
                    content={userCurrentlyLoggedIn.data.user.name}
                    {...titleStyle}
                  />
                ) : errorLogin ? (
                  <span></span>
                ) : (
                  <Heading content="Please Login" {...titleStyle} />
                )}
                {(errorLogin ||
                  errorSignup ||
                  userCurrentlyLoggedIn.data === undefined) && (
                  <Text
                    content="Please login with your personal account information."
                    {...descriptionStyle}
                  />
                )}
                {userCurrentlyLoggedIn.data === undefined ? (
                  <>
                    <Input
                      inputType="email"
                      onChange={value => setEmail(value)}
                      isMaterial
                      label="Email Address"
                    />
                    <Input
                      inputType="password"
                      onChange={value => setPassword(value)}
                      isMaterial
                      label="Password"
                    />
                    <CheckBox
                      id="remember"
                      htmlFor="remember"
                      labelText="Remember Me"
                    />
                    <div>
                      <LoginButtonGroup />
                    </div>
                  </>
                ) : (
                  <>
                    <Image src={SignedInImage} />
                  </>
                )}
              </TabPane>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: "auto",
    height: "80px",
    ml: "15px"
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px"
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px"
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"]
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84"
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48"
  }
};

export default LoginModal;
