import React from "react";
import Navbar from "./NavbarStyle";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <>
      <Header>
        <img src={"/assets/logo.svg"} alt="IndieBrew" />
        <Nav>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
          <Button>Get Started — it’s free</Button>
        </Nav>
        <img src={"/assets/hamburger-menu.svg"} alt="hamburger menu" />
      </Header>
    </>
  );
};

export default Navbar;
