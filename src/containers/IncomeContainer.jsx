import React, { useMemo, useState } from "react";
import queryString from "query-string";
import Pagination from "components/select/Pagination";
import getPageNationInitialData, { getCurrentPage, getDataSort } from "utils/PageNation";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";

const IncomeContainer = ({ history: { location } }) => {
  const { pathname, search } = location;
  const [pageNationState] = useState(getPageNationInitialData("incomeData"));
  // 동일한 페이지를 눌으면 재랜더 x
  const currentQuery = useMemo(() => queryString.parse(search), [search]);
  const showPages = useMemo(() => {
    if (currentQuery.page === undefined) currentQuery.page = 1;
    return getDataSort(getCurrentPage(pageNationState, currentQuery), currentQuery);
  }, [pageNationState, currentQuery]);

  const text = useMemo(
    () => ({
      date: "수입 날짜",
      price: "수입",
      insertDate: "등록 날짜",
    }),
    []
  );

  return (
    <>
      <DataSort pathname={pathname} currentQuery={currentQuery} text={text} />
      <DataTable data={showPages} />
      <Pagination
        pathname={pathname}
        currentQuery={currentQuery}
        pageGroup={pageNationState.pageGroup}
        lastPageGroup={pageNationState.lastPageGroup}
        lastPage={pageNationState.lastPage}
      />
    </>
  );
};

export default IncomeContainer;
