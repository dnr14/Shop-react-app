import React, { useEffect, useMemo, useState } from "react";
import Pagination from "components/select/Pagination";
import getPageNationInitialData from "utils/PageNation";
import DataSort from "components/select/DataSort";
import DataTable from "components/select/DataTable";
import { useHistory } from "react-router";
import useBoards from "hooks/useBoards";
import Modal from "components/select/Modal";
import Loading from "components/common/Loading";
import styled, { css } from "styled-components";
const LOCAL_STORAGE_ID = "incomeData";

const IncomeContainer = () => {
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

  const submit = (id, cb, close) => (data) => {
    const {
      incomeDate,
      incomeHoureTime,
      incomeMinutesTime,
      incomeMoney,
      insertDate,
      insertHoureTime,
      insertMinutesTime,
    } = data;

    // 지출 날짜  지출 시간
    const incomeFullDate = `${incomeDate} ${incomeHoureTime}:${incomeMinutesTime}:00`;
    const incomeTime = new Date(incomeFullDate).getTime();
    // 등록 날짜 등록 시간
    const insertFullDate = `${insertDate} ${insertHoureTime}:${insertMinutesTime}:00`;
    const insertTime = new Date(insertFullDate).getTime();

    const incomeData = {
      date: incomeFullDate,
      insertTime,
      price: incomeMoney,
      time: incomeTime,
      update: true,
    };

    (async () => {
      setIsLoading((prevState) => !prevState);
      const old_incomes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
      const new_incomes = old_incomes.map((el) =>
        el.id === id ? { ...el, ...incomeData } : el
      );
      // 모달이 바로 닫히지 않도록 지연을 주었다.
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(new_incomes));
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
      date: "수입 날짜",
      price: "수입",
      insertDate: "등록 날짜",
    }),
    []
  );
  const tableColumnSize = useMemo(() => [1, 1, 0, 4, 4, 2], []);

  return (
    <>
      <Loading loading={isLoading} />
      <Modal
        isVisible={isVisible}
        updateData={updateData}
        setIsVisible={setIsVisible}
        submit={submit}
      />

      <DataSort
        pathname={pathname}
        currentQuery={currentQuery}
        columnText={columnText}
        tableColumnSize={tableColumnSize}
        removeRowIds={removeRowIds}
        removeRows={removeRows}
      />
      <DataTable
        data={showPages}
        tableColumnSize={tableColumnSize}
        visible={isOpacity}
        removeRowsCheckedClick={removeRowsCheckedClick}
        boardModify={boardModify}
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

export default IncomeContainer;
