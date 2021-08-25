import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  li {
    display: inline-block;
  }
`;

const drawPagination = (pageGroup, lastPage) => {
  const PAGECOUNT = 5;
  return Array.from({ length: PAGECOUNT }, (_, i) => (pageGroup - 1) * PAGECOUNT + 1 + i);
};

const Pagination = ({ pathname, search, pageGroup, lastPageGroup, lastPage }) => {
  const sort = queryString.parse(search).sort;
  const pagenation = useMemo(() => {
    return drawPagination(pageGroup, lastPage);
  }, [pageGroup, lastPage]);

  const nextPage = useMemo(() => {
    return pageGroup * 5 + 1;
  }, [pageGroup]);

  const prevPage = useMemo(() => {
    return (pageGroup - 1) * 5;
  }, [pageGroup]);

  return (
    <div>
      <StyledUl>
        {1 !== pageGroup && (
          <li>
            {sort ? <Link to={`${pathname}?page=${prevPage}&sort=${sort}`}>{"<"}</Link> : <Link to={`${pathname}?page=${prevPage}`}>{"<"}</Link>}
          </li>
        )}
        {pagenation.map((item, idx) => (
          <li key={idx}>
            {sort ? <Link to={`${pathname}?page=${item}&sort=${sort}`}>{item}</Link> : <Link to={`${pathname}?page=${item}`}>{item}</Link>}
          </li>
        ))}
        {lastPageGroup !== pageGroup && (
          <li>
            {sort ? <Link to={`${pathname}?page=${nextPage}&sort=${sort}`}>{">"}</Link> : <Link to={`${pathname}?page=${nextPage}`}>{">"}</Link>}
          </li>
        )}
      </StyledUl>
    </div>
  );
};

export default memo(Pagination);
