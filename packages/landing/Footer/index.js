import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IS_CURRENTLY_LOGGED_IN } from "common/src/MutationsQueries";
import Container from "common/src/components/UI/Container";
import Heading from "common/src/components/Heading";
import Image from "common/src/components/Image";
import Link from "common/src/components/Link";
import Text from "common/src/components/Text";
import List from "common/src/components/List";
import Button from "reusecore/src/elements/Button";
import { AuthContext } from "common/src/contexts/AuthContext";
import { openModal, closeModal } from "@redq/reuse-modal";
import LoginModal from "../LoginModal";

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from "./footer.style";
import LogoImage from "common/src/assets/image/logo-alt.png";

import data from "common/src/data/AgencyModern";

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Footer = () => {
  const router = useRouter();
  if (!router) {
    return null;
  }
  const { dispatch } = useContext(AuthContext);
  const { client, loading, refetch, data: userData } = useQuery(
    IS_CURRENTLY_LOGGED_IN
  );
  console.log(userData);
  const handleLoginModal = () => {
    openModal({
      config: {
        className: "login-modal",
        disableDragging: true,
        width: "auto",
        height: "auto",
        animationFrom: { transform: "translateY(100px)" },
        animationTo: { transform: "translateY(0)" },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  const handleLogout = () => {
    dispatch({
      type: "INAUTH",
    });
    client.resetStore();
    router.push("/");
  };

  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <Image src={LogoImage} alt="Logo" />
              <p>
                <Link href="#">Terms of use</Link> |{" "}
                <Link href="#">Privacy</Link>
              </p>
              <p className="copyright">
                <Link href="https://www.hatchli.com" target="_blank">
                  built by Hatchli
                </Link>
              </p>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content="About Us" />
              <Nav>
                {data.aboutUs.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content="Our Information" />
              <Nav>
                {data.ourInformation.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={400}>
              <Heading as="h4" content="My Account" />
              <Nav>
                {data.myAccount.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
                {userData &&
                  userData.currentUser &&
                  userData.currentuser !== null && (
                    <Link href="/account">Admin Page</Link>
                  )}
                {userData &&
                  userData.currentUser &&
                  userData.currentuser !== null && (
                    <Link onClick={handleLogout}>
                      Logout {userData.currentUser.name}
                    </Link>
                  )}
                {(!userData || userData.currentUser === null) && (
                  <Link onClick={handleLoginModal}>Login</Link>
                )}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Connect" />
              <Nav>
                {data.social.map((item) => (
                  <Link key={item.id} href="#">
                    <Image src={item.icon} alt="Facebook" />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
