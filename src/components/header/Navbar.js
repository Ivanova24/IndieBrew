import React from "react";
import Header from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Header>
        <img src={"/assets/logo.svg"} alt="IndieBrew" />
        <img src={"/assets/hamburger-menu.svg"} alt="hamburger menu" />
      </Header>
    </>
  );
};

export default Navbar;
