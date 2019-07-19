import React from "react";
import logoUrl from "../assets/logo.svg";
import StyledHeader from "../styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoUrl} alt="Tesla" />
    </StyledHeader>
  );
};

export default Header;
