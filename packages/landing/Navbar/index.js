import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NavbarWrapper from "reusecore/src/elements/Navbar";
import Drawer from "reusecore/src/elements/Drawer";
import Button from "reusecore/src/elements/Button";
import Logo from "reusecore/src/elements/UI/Logo";
import Box from "reusecore/src/elements/Box";
import HamburgMenu from "common/src/components/HamburgMenu";
import Container from "common/src/components/UI/Container";
import { DrawerContext } from "common/src/contexts/DrawerContext";

import { MENU_ITEMS } from "common/src/data/Portfolio/data";
import ScrollSpyMenu from "common/src/components/ScrollSpyMenu";
import LogoImageAlt from "common/src/assets/image/logo.png";
import logo from "common/src/assets/image/logo-alt.png";

const cheight = ["60px", "80px", "100px", "100px", "140px", "180px"];

const dynamic = ["flex-end", "flex-end", "flex-end", "center", "flex-end"];

const Navbar = ({
  navbarStyle,
  linksBox,
  logoStyle,
  button,
  row,
  menuWrapper,
  ulStyle,
}) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={logo}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Box {...linksBox}>
            <Box {...menuWrapper}>
              <ScrollSpyMenu
                style={ulStyle}
                className="main_menu"
                menuItems={MENU_ITEMS}
                offset={-70}
              />
              {/* <Link href="#">
                <a className="navbar_button">
                  <Button {...button} title="BOOK A CALL" />
                </a>
              </Link> */}
              <Drawer
                width="420px"
                placement="right"
                drawerHandler={<HamburgMenu barColor="#3444f1" />}
                open={state.isOpen}
                toggleHandler={toggleHandler}
              >
                <ScrollSpyMenu
                  className="mobile_menu"
                  menuItems={MENU_ITEMS}
                  drawerClose={true}
                  offset={-100}
                />
                <Link href="#">
                  <a className="navbar_drawer_button">
                    <Button {...button} title="BOOK A CALL" />
                  </a>
                </Link>
              </Drawer>
            </Box>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
  linksBox: PropTypes.object,
  ulStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: cheight,
    display: "block",
  },
  ulStyle: {
    display: "flex",
    alignItems: "center",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: cheight,
  },
  linksBox: {
    flexBox: true,
    justifyContent: "space-between",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["60px", "75px", "90px", "110px", "140px", "180px"],
    padding: "5px 0",
  },
  button: {
    type: "button",
    fontSize: "16px",
    pl: "0",
    pr: "0",
    colors: "primary",
    minHeight: "auto",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
    height: cheight,
    width: "100%",
    justifyContent: dynamic,
  },
};

export default Navbar;
