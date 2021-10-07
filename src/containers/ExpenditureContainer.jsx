import React, { useCallback, useEffect, useMemo, useState } from "react";
import getPageNationInitialData, { getCurrentPage, getDataSort } from "utils/PageNation";
import queryString from "query-string";
import Pagination from "components/select/Pagination";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import { useHistory } from "react-router";

const LOCAL_STORAGE_ID = "expenditureData";

const ExpenditureContainer = () => {
  const { location } = useHistory();
  const { pathname, search } = location;
  const [pageNationState, setPageNagetion] = useState(
    getPageNationInitialData(LOCAL_STORAGE_ID)
  );

  const [removeRowIds, setRemoveRowIds] = useState([]);
  const [showPages, setShowPages] = useState([]);

  const currentQuery = useMemo(() => queryString.parse(search), [search]);

  const getPages = useCallback(
    (pagesInit) => {
      if (currentQuery.page === undefined) currentQuery.page = 1;
      const currentPages = getCurrentPage(pagesInit, currentQuery);
      return getDataSort(currentPages, currentQuery);
    },
    [currentQuery]
  );

  const handleClick = useCallback(
    (id) => (e) => {
      setRemoveRowIds((prevIds) =>
        e.target.checked
          ? [...new Set([...prevIds, id])]
          : prevIds.filter((prevId) => prevId !== id)
      );
    },
    []
  );

  // 변수명
  const removeRows = useCallback(() => {
    const expendArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
    const newArray = expendArray.filter((el) =>
      removeRowIds.includes(el.id) ? false : true
    );
    //체크 된 row를 제거 후 다시 로컬 스토리지에 저장한다.
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(newArray));
    // 현재 보여질 페이지네이션을 구한다.
    const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    // 현재 보여질 페이지를 구한다.
    const pages = getPages(pagesinit);
    // 페이지네이션 and 페이지를 랜더링해준다.
    setPageNagetion(pagesinit);
    setShowPages(pages);
    setRemoveRowIds([]);
  }, [removeRowIds, getPages]);

  useEffect(() => {
    if (currentQuery.page === undefined) currentQuery.page = 1;
    const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    const pages = getPages(pagesinit);
    setShowPages(pages);
  }, [pageNationState, currentQuery, getPages]);

  const columnText = useMemo(
    () => ({
      date: "지출 날짜",
      price: "지출",
      insertDate: "등록날짜",
      category: "카테고리",
    }),
    []
  );
  const tableColumnSize = useMemo(() => [1, 1, 2, 3, 3, 2], []);

  return (
    <>
      <DataSort
        pathname={pathname}
        currentQuery={currentQuery}
        columnText={columnText}
        tableColumnSize={tableColumnSize}
        removeRowIds={removeRowIds}
        removeRows={removeRows}
        isCategory
      />
      <DataTable
        data={showPages}
        tableColumnSize={tableColumnSize}
        isCategory
        handleClick={handleClick}
      />
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
