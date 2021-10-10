import React, { useCallback, useEffect, useMemo, useState } from "react";
import getPageNationInitialData, { getCurrentPage, getDataSort } from "utils/PageNation";
import queryString from "query-string";
import Pagination from "components/select/Pagination";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import { useHistory } from "react-router";
import Modal from "components/select/Modal";

const LOCAL_STORAGE_ID = "expenditureData";

const ExpenditureContainer = () => {
  const { location } = useHistory();
  const { pathname, search } = location;
  const [pageNationState, setPageNagetion] = useState(
    getPageNationInitialData(LOCAL_STORAGE_ID)
  );
  //모달 열림 닫힘
  const [isVisible, setIsVisible] = useState(false);
  const [updateData, setUpdateData] = useState({});
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

  const boardRemoveCheckBox = useCallback(
    (id) => (e) => {
      console.log("boardRemoveCheckBox==>", id);
      setRemoveRowIds((prevIds) =>
        e.target.checked
          ? [...new Set([...prevIds, id])]
          : prevIds.filter((prevId) => prevId !== id)
      );
    },
    []
  );
  console.log(removeRowIds);

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

  const boardModify = useCallback(
    (id) => (e) => {
      e.preventDefault();
      const data = showPages.find((el) => el.id === id);
      console.log("data===>", data);
      setUpdateData(data);
      setIsVisible(true);
    },
    [showPages, setUpdateData]
  );

  // 모달
  const submit = (id, cb, close) => (data) => {
    console.log(data);
    // 지출 목록
    // const categoryValue = e.target.category.value;
    // // 지출 날짜
    // const expenditureDateValue = e.target.expenditureDate.value;
    // // 지출 시간
    // const expenditureHoureTimeValue = e.target.expenditureHoureTime.value;
    // const expenditureMinutesTime = e.target.expenditureMinutesTime.value;
    // const expenditureFullDate = `${expenditureDateValue} ${expenditureHoureTimeValue}:${expenditureMinutesTime}:00`;
    // const expenditureTime = new Date(expenditureFullDate).getTime();
    // // 등록 날짜
    // const insertDateValue = e.target.insertDate.value;
    // // 등록 시간
    // const insertHoureTime = e.target.insertHoureTime.value;
    // const insertMinutesTime = e.target.insertMinutesTime.value;
    // const insertFullDate = `${insertDateValue} ${insertHoureTime}:${insertMinutesTime}:00`;
    // const insertTime = new Date(insertFullDate).getTime();
    // // 지출 금액
    // const expenditureMoney = e.target.expenditureMoney.value;
    // const expenditure = {
    //   category: categoryValue,
    //   date: expenditureFullDate,
    //   insertTime,
    //   price: expenditureMoney,
    //   time: expenditureTime,
    //   update: true,
    // };
    // const old_expenditures = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
    // const new_expenditures = old_expenditures.map((el) =>
    //   el.id === id ? { ...el, ...expenditure } : el
    // );
    // localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(new_expenditures));
    // cb(false);
    // close.current = true;
    // const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    // // 현재 보여질 페이지를 구한다.
    // const pages = getPages(pagesinit);
    // // 페이지네이션 and 페이지를 랜더링해준다.
    // setPageNagetion(pagesinit);
    // setShowPages(pages);
  };

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
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        submit={submit}
        updateData={updateData}
      />
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
        boardRemoveCheckBox={boardRemoveCheckBox}
        boardModify={boardModify}
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
