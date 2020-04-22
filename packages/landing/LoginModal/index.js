import React, { Fragment, useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  IS_CURRENTLY_LOGGED_IN,
} from "common/src/MutationsQueries";
import { AuthContext } from "common/src/contexts/AuthContext";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Input from "reusecore/src/elements/Input";
import Button from "reusecore/src/elements/Button";
import Icon from "react-icons-kit";
import Image from "reusecore/src/elements/Image";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
// import LogoImage from "common/src/assets/image/hatchli-reduced-logo.svg";
import Loader from "reusecore/src/elements/Loader/index.js";
import Alert from "reusecore/src/elements/Alert/index";
import { check } from "react-icons-kit/feather/check";
import { slash } from "react-icons-kit/feather/slash";
const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  warningWithBg,
}) => {
  const wait = (amount = 0) =>
    new Promise((resolve) => setTimeout(resolve, amount));
  const router = useRouter();
  if (!router) {
    return null;
  }
  const { dispatch } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState({ email: "", valid: "" });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
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

  const userCurrentlyLoggedIn = useQuery(IS_CURRENTLY_LOGGED_IN);

  const [
    login,
    {
      loading: loadingLogin,
      error: errorLogin,
      data: dataLogin,
      client: clientLogin,
    },
  ] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
    onCompleted: () => {
      dispatch({
        type: "AUTH",
      });
      wait(500).then(() => {
        router.push("/account");
      });
    },
    update(cache, { data: { login } }) {
      console.log("login", login);
      console.log("cache", cache);
      console.log("dataLogin", dataLogin);
      cache.writeQuery({
        query: IS_CURRENTLY_LOGGED_IN,
        data: {
          currentUser: {
            name: login.user.name,
            user_id: login.user.user_id,
            email: login.user.email,
            token: login.token,
            role: login.user.role,
          },
        },
      });
    },
  });

  const [
    signup,
    {
      loading: loadingSignup,
      error: errorSignup,
      data: dataSignup,
      client: clientSignup,
    },
  ] = useMutation(SIGNUP_MUTATION, {
    variables: { name, email: email.email, password },
    onCompleted: () => {
      dispatch({
        type: "INAUTH",
      });
    },
    update(cache, { data: { signup } }) {
      cache.writeQuery({
        query: IS_CURRENTLY_LOGGED_IN,
        data: {
          currentUser: {
            name: signup.user.name,
            user_id: signup.user.user_id,
            email: signup.user.email,
            token: signup.token,
            role: signup.user.role,
          },
        },
      });
    },
    onError(error) {
      console.log("error", error);
      console.log("name", name, "email", email, "password", password);
    },
  });

  const LoginButtonGroup = () => {
    return (
      <Button
        className="default"
        title="LOGIN"
        isLoading={loadingLogin}
        icon={
          dataLogin ? (
            <Icon
              icon={check}
              style={{ color: "#030b16" }}
              // size={22}
            />
          ) : errorLogin ? (
            <Icon
              icon={slash}
              style={{ color: "#030b16" }}
              // size={22}
            />
          ) : null
        }
        iconPosition="right"
        onClick={() => login()}
        {...btnStyle}
      />
    );
  };
  const SignupButtonGroup = () => (
    <Fragment>
      <Button
        className="default"
        title="REGISTER"
        isLoading={loadingSignup}
        // disabled={email.valid === "invalid" || email.valid == ""}
        disabled={dataSignup}
        icon={
          dataSignup ? (
            <Icon
              icon={check}
              style={{ color: "#030b16" }}
              // size={22}
            />
          ) : errorSignup ? (
            <Icon
              icon={slash}
              style={{ color: "#030b16" }}
              // size={22}
            />
          ) : null
        }
        iconPosition="right"
        onClick={() => signup()}
        {...btnStyle}
      />
    </Fragment>
  );

  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            {/* <Image src={LogoImage} {...logoStyle} alt="Logo" /> */}
            <Tabs
              defaultActiveKey="loginForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="REGISTER" key="registerForm">
                <Input
                  isMaterial
                  label="Full Name"
                  inputType="text"
                  required={true}
                  onChange={(value) => setName(value)}
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
                  onChange={(value) => setPassword(value)}
                  isMaterial
                  label="Password"
                  required={true}
                />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="LOGIN" key="loginForm">
                <>
                  <Input
                    inputType="email"
                    onChange={(value) => setEmail(value)}
                    isMaterial
                    label="Email Address"
                  />
                  <Input
                    inputType="password"
                    onChange={(value) => setPassword(value)}
                    isMaterial
                    label="Password"
                  />
                  <div>
                    <LoginButtonGroup />
                  </div>
                </>
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
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1],
  },
  // Default logo size
  logoStyle: {
    width: "auto",
    height: "80px",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["0px"],
    pl: ["17px"],
    pr: "32px",
    pb: ["32px"],
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
};

export default LoginModal;
