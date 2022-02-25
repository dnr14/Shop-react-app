import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { mobile } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";
import { getGrayColor1 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { useAuthContext } from "contexts/AuthProvider";
import useLogout from "hooks/useLogout";
import { NavLink } from "react-router-dom";

const Links = ({ isMenuOpen, headerWidth }) => {
  const { access } = useAuthContext();
  const { logout } = useLogout();

  const links = useMemo(
    () =>
      [
        {
          text: `${access ? "로그아웃" : "로그인"}`,
          url: `${access ? "/logout" : "/login"}`,
          access: true,
        },
        {
          text: `${access ? "마이페이지" : "회원가입"}`,
          url: `${access ? "/my" : "/signup"}`,
          access: true,
        },
        { text: "게시판", url: "/board" },
        { text: "입출 등록", url: "/insert/expenditure" },
        { text: "입출 현황", url: "/select/income" },
      ].map(({ url, text }, idx) => {
        if (url === "/logout") {
          return (
            <li className="nav-item" key={idx} onClick={logout}>
              <a href="#">{text}</a>
            </li>
          );
        }

        return (
          <li className="nav-item" key={idx}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      }),
    [access, logout],
  );

  return (
    <LinksWrapper>
      <Menus isMenuOpen={isMenuOpen} headerWidth={headerWidth} liLength={links.length}>
        {links}
      </Menus>
    </LinksWrapper>
  );
};

const LinksWrapper = styled.nav`
  ${mobile} {
    width: 100%;
  }
`;

const Menus = styled.ul`
  ${getFlex("flex-end", "center")}
  flex-wrap: wrap;
  height: 80px;

  a {
    position: relative;
    display: block;
    padding: 10px 0.625rem;
    font-size: 1rem;
    ${getWhiteColor1};
  }
  .active {
    font-weight: bold;
    &:after {
      display: inline-block;
      content: "";
      position: absolute;
      border-bottom: 1px solid;
      height: 1px;
      bottom: 0;
      right: 0;
      left: 0;
      ${getBoxShadow2}
    }
  }

  ${mobile} {
    overflow: hidden;
    height: 0;
    padding: 0;
    ${({ headerWidth }) => {
      if (headerWidth < 992) {
        return css`
          transition: 0.5s;
        `;
      }
    }}
    .nav-item {
      width: 100%;
    }

    a:hover {
      transform: scale(0.99);
      font-weight: 900;
      border-radius: 5px;
      ${getGrayColor1};
      ${getBackGroundWhiteColor1};
    }
    .active {
      ${getBackGroundWhiteColor1};
      font-weight: 900;
      border-radius: 5px;
      ${getGrayColor1};
    }

    .active::after {
      display: none;
    }

    ${({ isMenuOpen, liLength }) =>
      isMenuOpen &&
      css`
        height: ${liLength * 50}px;
        margin-bottom: 10px;
      `}
  }
`;

export default Links;
