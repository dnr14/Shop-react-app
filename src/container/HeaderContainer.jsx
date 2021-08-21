import Header from "components/header/Header";
import React, { useState } from "react";

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = ({ type }) => (type !== "blur" ? setIsMenuOpen(!isMenuOpen) : setIsMenuOpen(false));

  return <Header isMenuOpen={isMenuOpen} handleClick={handleClick} />;
};

export default HeaderContainer;
