import Header from "components/header/Header";
import React, { useCallback, useState } from "react";

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback(() => {
    return ({ type }) => (type !== "blur" ? setIsMenuOpen((prevState) => !prevState) : setIsMenuOpen(false));
  }, [setIsMenuOpen]);

  return <Header isMenuOpen={isMenuOpen} handleClick={handleClick} />;
};

export default HeaderContainer;
