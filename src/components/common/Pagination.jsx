import React, { memo, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import queryString from "query-string";
import { getPageNationNumbers } from "utils/PageNation";
import { makeUrl } from "utils/urlUtil";
import styled from "styled-components";
import prevArrow from "assets/images/prevArrow.svg";
import nextArrow from "assets/images/nextArrow.svg";
import { useLocation } from "react-router-dom";
import { getFlex } from "assets/style/GlobalStyled";

const Pagination = ({ currentQuery, pageGroup, lastPageGroup, lastPage }) => {
  const { pathname } = useLocation();

  const [nextPage, prevPage, pagenation] = useMemo(
    () => getPageNationNumbers(pageGroup, lastPage, lastPageGroup),
    [pageGroup, lastPage, lastPageGroup]
  );

  return (
    <PaginationWrapper>
      {1 !== pageGroup && (
        <li>
          <Link
            to={`${makeUrl(pathname, currentQuery, { page: prevPage })}`}
            className="prve"
          />
        </li>
      )}
      {pagenation.map((page, idx) => {
        return (
          <li key={idx}>
            <NavLink
              to={`${makeUrl(pathname, currentQuery, { page })}`}
              isActive={(_, location) => isActive(String(page), location)}
            >
              {page}
            </NavLink>
          </li>
        );
      })}
      {lastPageGroup !== pageGroup && (
        <li>
          <Link
            to={`${makeUrl(pathname, currentQuery, { page: nextPage })}`}
            className="next"
          />
        </li>
      )}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.ul`
  ${getFlex("center")};
  gap: 0.5rem;
  margin-bottom: 2rem;

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
      box-shadow: 0px 0px 2px rgba(127, 140, 141, 0.5);
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

const isActive = (currentPage, { search }) => {
  const query = queryString.parse(search);
  const { page } = query;
  if (page === undefined) return currentPage === "1";
  return currentPage === page ? true : false;
};

export default memo(Pagination);
