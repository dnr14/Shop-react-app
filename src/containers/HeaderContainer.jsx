import Header from "components/header/Header";
import { useAuthContext } from "contexts/AuthContextProvider";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = useCallback(
    ({ type }) =>
      type !== "blur" ? setIsMenuOpen((prevState) => !prevState) : setIsMenuOpen(false),
    [setIsMenuOpen]
  );
  const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
  const { access } = useAuthContext();

  useEffect(() => {
    let timer;

    const resize = window.addEventListener("resize", (e) => {
      // 디바운스 처리
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        const { innerWidth } = e.target;
        setHeaderWidth(innerWidth);
      }, 200);
    });
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const links = useMemo(
    () => [
      {
        text: `${access ? "로그아웃" : "로그인"}`,
        url: `${access ? "/logout" : "/login"}`,
        access: true,
      },
      {
        text: `${access ? "마이페이지" : "회원가입"}`,
        url: `${access ? "/me" : "/memberShip"}`,
        access: true,
      },
      { text: "입출 등록", url: "/insert" },
      { text: "입출 목록", url: "/select" },
      { text: "통계", url: "/sss" },
    ],
    [access]
  );

  const pureLinsks = useMemo(
    () =>
      links.map((link, idx) => (
        <li className="nav-item" key={idx}>
          <NavLink to={link.url}>{link.text}</NavLink>
        </li>
      )),
    [links]
  );

  return (
    <Header
      isMenuOpen={isMenuOpen}
      handleClick={handleClick}
      headerWidth={headerWidth}
      pureLinsks={pureLinsks}
    />
  );
};

export default HeaderContainer;
