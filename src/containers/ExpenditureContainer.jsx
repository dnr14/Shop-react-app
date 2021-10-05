import React, { useMemo, useState } from "react";
import getPageNationInitialData, { getCurrentPage, getDataSort } from "utils/PageNation";
import queryString from "query-string";
import Pagination from "components/select/Pagination";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import { useHistory } from "react-router";

const ExpenditureContainer = () => {
  const { location } = useHistory();
  const { pathname, search } = location;
  const [pageNationState] = useState(getPageNationInitialData("expenditureData"));
  const currentQuery = useMemo(() => queryString.parse(search), [search]);
  const showPages = useMemo(() => {
    if (currentQuery.page === undefined) currentQuery.page = 1;
    return getDataSort(getCurrentPage(pageNationState, currentQuery), currentQuery);
  }, [pageNationState, currentQuery]);

  const sortText = useMemo(
    () => ({
      date: "지출 날짜",
      price: "지출",
      insertDate: "등록날짜",
      category: "카테고리",
    }),
    []
  );

  return (
    <>
      <DataSort
        pathname={pathname}
        currentQuery={currentQuery}
        text={sortText}
        isCategory
      />
      <DataTable data={showPages} isCategory />
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

export default ExpenditureContainer;
