import React, { memo, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import queryString from "query-string";
import { getPageNationNumbers } from "utils/PageNation";
import { makeUrl } from "utils/urlUtil";
import { PagiNationUl } from "style/select/Pagination.styled";

const Pagination = ({ pathname, currentQuery, pageGroup, lastPageGroup, lastPage }) => {
  const [nextPage, prevPage, pagenation] = useMemo(
    () => getPageNationNumbers(pageGroup, lastPage, lastPageGroup),
    [pageGroup, lastPage, lastPageGroup]
  );

  return (
    <PagiNationUl>
      {1 !== pageGroup && (
        <li>
          <Link
            to={`${makeUrl(pathname, currentQuery, { page: prevPage })}`}
            className="prve"
          />
        </li>
      )}
      {pagenation.map((item, idx) => (
        <li key={idx}>
          <NavLink
            to={`${makeUrl(pathname, currentQuery, { page: item })}`}
            isActive={(_, location) => isActive(item, location)}
          >
            {item}
          </NavLink>
        </li>
      ))}
      {lastPageGroup !== pageGroup && (
        <li>
          <Link
            to={`${makeUrl(pathname, currentQuery, { page: nextPage })}`}
            className="next"
          />
        </li>
      )}
    </PagiNationUl>
  );
};

const isActive = (item, location) =>
  String(item) === queryString.parse(location.search).page ? true : false;

export default memo(Pagination);
