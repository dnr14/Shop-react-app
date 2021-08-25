import React, { useMemo, useState } from "react";
import querytString from "query-string";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import Pagination from "components/select/Pagination";

/*
  currentPage 1.2.3
  pageGroup 1..2..3
 */

const setCurrentPageShow = (pageNationState, page, sort) => {
  const { data } = pageNationState;
  const lastPage = Math.ceil(data.length / 5);
  const currnetPage = Number(page);
  pageNationState.pageGroup = Math.ceil(currnetPage / 5);

  if (lastPage >= currnetPage) {
    const startPage = (currnetPage - 1) * 5;
    const endPage = startPage + 5;
    const showData = data
      .reverse()
      .slice(startPage, endPage)
      .map((v, idx) => ({ ...v, idx: startPage + 1 + idx }));

    if (sort !== undefined) {
      return sort === "desc"
        ? showData.sort((a, b) => (a.time >= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx }))
        : showData.sort((a, b) => (a.time <= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx }));
    }

    return showData;
  } else {
    return [];
  }
};

const initialData = () => {
  const data = JSON.parse(localStorage.getItem("incomeData"));
  const pageNationObj = {
    data,
    lastPageGroup: Math.ceil(data.length / 25),
    lastPage: Math.ceil(data.length / 5),
    pageGroup: 1,
    currentPage: 1,
  };

  return pageNationObj;
};

const IncomeContainer = ({ match: { path }, history: { location } }) => {
  const [pageNationState] = useState(initialData());
  const { pathname, search } = location;
  const currentOption = useMemo(() => querytString.parse(location.search), [location.search]);
  const showPages = useMemo(() => setCurrentPageShow(pageNationState, currentOption.page, currentOption.sort), [pageNationState, currentOption]);

  return (
    <>
      <DataSort path={path} currentOption={currentOption} />
      <DataTable data={showPages} currentOption={currentOption} />
      <Pagination
        pathname={pathname}
        search={search}
        pageGroup={pageNationState.pageGroup}
        lastPageGroup={pageNationState.lastPageGroup}
        lastPage={pageNationState.lastPage}
      />
    </>
  );
};

export default IncomeContainer;
