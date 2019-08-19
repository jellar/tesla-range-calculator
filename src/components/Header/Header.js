import React from "react";
import logoUrl from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header header-animation">
      <img src={logoUrl} alt="Tesla" />
    </div>
  );
};

export default Header;
