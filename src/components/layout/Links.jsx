import React from "react";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

const Links = ({ isMenuActive }) => {
  return (
    <nav>
      <ul className={isMenuActive ? "nav-list open" : "nav-list"}>
        <li className="nav-item">
          <NavLink to="/login" activeClassName={activeClassName}>
            로그인
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="/">회원가입</a>
        </li>
        <li className="nav-item">
          <NavLink to="/insert" activeClassName={activeClassName}>
            입출 등록
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/select" activeClassName={activeClassName}>
            입출 목록
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="/">통계</a>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
