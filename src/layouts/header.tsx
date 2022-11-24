import React from "react";

import Logo from "../assets/logo.svg";

const Header: React.FC = () => (
  <header className="header">
    <img className="logo" src={Logo} alt="Ignite Feed logo" />
  </header>
);

export default Header;
