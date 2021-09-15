import React, { memo, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";
import { getPageNationNumbers } from "utils/PageNation";
import prevArrow from "images/prevArrow.svg";
import nextArrow from "images/nextArrow.svg";
import { makeUrl } from "utils/urlUtil";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  li {
    display: inline-block;
    & > a {
      box-sizing: content-box;
      display: inline-block;
      padding: 5px;
      width: 20px;
      text-align: center;
      color: #000;
      border-radius: 2px;
      box-shadow: 5px 5px 5px rgba(127, 140, 141, 0.5);
    }
  }
  .prve,
  .next {
    background-size: cover;
    height: 19px;
    width: 19px;
  }
  .prve {
    background-image: url(${prevArrow});
  }
  .next {
    background-image: url(${nextArrow});
  }

  .active {
    background-color: rgba(46, 204, 113, 1);
    color: #fff;
  }
`;

const Pagination = ({ pathname, currentQuery, pageGroup, lastPageGroup, lastPage }) => {
  const [nextPage, prevPage, pagenation] = useMemo(
    () => getPageNationNumbers(pageGroup, lastPage, lastPageGroup),
    [pageGroup, lastPage, lastPageGroup]
  );

  return (
    <StyledUl>
      {1 !== pageGroup && (
        <li>
          <Link to={`${makeUrl(pathname, currentQuery, { page: prevPage })}`} className="prve" />
        </li>
      )}
      {pagenation.map((item, idx) => (
        <li key={idx}>
          <NavLink to={`${makeUrl(pathname, currentQuery, { page: item })}`} isActive={(_, location) => isActive(item, location)}>
            {item}
          </NavLink>
        </li>
      ))}
      {lastPageGroup !== pageGroup && (
        <li>
          <Link to={`${makeUrl(pathname, currentQuery, { page: nextPage })}`} className="next" />
        </li>
      )}
    </StyledUl>
  );
};

const isActive = (item, location) => (String(item) === queryString.parse(location.search).page ? true : false);

export default memo(Pagination);
