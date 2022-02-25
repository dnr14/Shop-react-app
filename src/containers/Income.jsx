import React, { useMemo } from "react";
import Pagination from "components/common/Pagination";
import getPageNationInitialData from "utils/PageNation";
import Sort from "components/common/Sort";
import DataTable from "components/common/DataTable";
import useBoards from "hooks/useBoards";
import ListModal from "components/ListModal";
const LOCAL_STORAGE_ID = "incomeData";

const Income = () => {
  const {
    removeRowIds,
    isVisible,
    updateData,
    currentQuery,
    showPages,
    pageNationState,
    loading,
    isOpacity,
    setIsVisible,
    removeRows,
    removeRowsCheckedClick,
    setPageNagetion,
    setShowPages,
    setLoading,
    boardModify,
    getPages,
  } = useBoards(LOCAL_STORAGE_ID);

  const onSubmit = (id, cb, close) => async data => {
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
      price: incomeMoney === "" ? "0" : incomeMoney,
      time: incomeTime,
      update: true,
    };

    setLoading(true);
    const old_incomes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
    const new_incomes = old_incomes.map(el => (el.id === id ? { ...el, ...incomeData } : el));
    console.log(new_incomes);
    // // 모달이 바로 닫히지 않도록 지연을 주었다.
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(new_incomes));
    await new Promise(re => setTimeout(() => re(alert("완료가 되었습니다.")), 1000));
    // // 모달 닫기
    cb(false);
    close.current = true;
    // // // 현재 보여질 페이지를 구한다.
    const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    const pages = getPages(pagesinit);
    // // 페이지네이션 and 페이지를 랜더링해준다.
    setPageNagetion(pagesinit);
    setShowPages(pages);
    setLoading(false);
  };

  const text = useMemo(
    () => ({
      date: "수입 날짜",
      price: "수입",
      insertDate: "등록 날짜",
    }),
    [],
  );

  return (
    <div>
      <Sort text={text} currentQuery={currentQuery} removeRowIds={removeRowIds} removeRows={removeRows} />
      <DataTable
        loading={loading}
        datas={showPages}
        visible={isOpacity}
        removeRowsCheckedClick={removeRowsCheckedClick}
        boardModify={boardModify}
      />
      {showPages.length !== 0 && (
        <Pagination
          currentQuery={currentQuery}
          pageGroup={pageNationState.pageGroup}
          lastPageGroup={pageNationState.lastPageGroup}
          lastPage={pageNationState.lastPage}
        />
      )}
      <ListModal isVisible={isVisible} updateData={updateData} setIsVisible={setIsVisible} onSubmit={onSubmit} />
    </div>
  );
};

export default Income;
