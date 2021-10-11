import React, { useMemo, useState } from "react";
import getPageNationInitialData from "utils/PageNation";
import Pagination from "components/select/Pagination";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import { useHistory } from "react-router";
import Modal from "components/select/Modal";
import Loading from "components/common/Loading";
import useBoards from "hooks/useBoards";
import styled, { css } from "styled-components";
const LOCAL_STORAGE_ID = "expenditureData";

const ExpenditureContainer = () => {
  const { location } = useHistory();
  const { pathname } = location;
  const {
    removeRowIds,
    isVisible,
    updateData,
    currentQuery,
    showPages,
    pageNationState,
    isLoading,
    isOpacity,
    setIsVisible,
    removeRows,
    removeRowsCheckedClick,
    setPageNagetion,
    setShowPages,
    setIsLoading,
    boardModify,
    getPages,
  } = useBoards(LOCAL_STORAGE_ID);

  // 모달
  const submit = (id, cb, close) => (data) => {
    const {
      category,
      expenditureDate,
      expenditureHoureTime,
      expenditureMinutesTime,
      expenditureMoney,
      insertDate,
      insertHoureTime,
      insertMinutesTime,
    } = data;

    // 지출 날짜  지출 시간
    const expenditureFullDate = `${expenditureDate} ${expenditureHoureTime}:${expenditureMinutesTime}:00`;
    const expenditureTime = new Date(expenditureFullDate).getTime();
    // 등록 날짜 등록 시간
    const insertFullDate = `${insertDate} ${insertHoureTime}:${insertMinutesTime}:00`;
    const insertTime = new Date(insertFullDate).getTime();

    // 지출 목록, 지출한 날짜 + 시간 , 지출 등록한 날짜 + 시간 , 지출 금액, 지출날짜 숫자값 , 업데이트 유무
    const expenditureData = {
      category: category,
      date: expenditureFullDate,
      insertTime,
      price: expenditureMoney,
      time: expenditureTime,
      update: true,
    };

    (async () => {
      setIsLoading((prevState) => !prevState);
      const old_expenditures = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
      const new_expenditures = old_expenditures.map((el) =>
        el.id === id ? { ...el, ...expenditureData } : el
      );
      // 모달이 바로 닫히지 않도록 지연을 주었다.
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(new_expenditures));
      await new Promise((re) => setTimeout(() => re(alert("완료가 되었습니다.")), 1000));
      // 모달 닫기
      cb(false);
      close.current = true;
      // // 현재 보여질 페이지를 구한다.
      const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
      const pages = getPages(pagesinit);
      // // 페이지네이션 and 페이지를 랜더링해준다.
      setPageNagetion(pagesinit);
      setShowPages(pages);
    })().finally(() => {
      setIsLoading((prevState) => !prevState);
    });
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
  console.log(showPages);

  const tableColumnSize = useMemo(() => [1, 1, 2, 3, 3, 2], []);

  return (
    <>
      <Loading loading={isLoading} />
      <Modal
        isVisible={isVisible}
        updateData={updateData}
        setIsVisible={setIsVisible}
        submit={submit}
        isCategory
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
        visible={isOpacity}
        removeRowsCheckedClick={removeRowsCheckedClick}
        boardModify={boardModify}
        isCategory
      />
      {showPages.length !== 0 && (
        <Pagination
          pathname={pathname}
          currentQuery={currentQuery}
          pageGroup={pageNationState.pageGroup}
          lastPageGroup={pageNationState.lastPageGroup}
          lastPage={pageNationState.lastPage}
        />
      )}
    </>
  );
};

export default ExpenditureContainer;
