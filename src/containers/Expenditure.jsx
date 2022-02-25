import React, { useMemo } from "react";
import getPageNationInitialData from "utils/PageNation";
import Pagination from "components/common/Pagination";
import Sort from "components/common/Sort";
import DataTable from "components/common/DataTable";
import ListModal from "components/ListModal";
import useBoards from "hooks/useBoards";
const LOCAL_STORAGE_ID = "expenditureData";

const Expenditure = () => {
  const {
    removeRowIds,
    isVisible,
    updateData,
    currentQuery,
    showPages,
    pageNationState,
    loading,
    isOpacity,
    setLoading,
    setIsVisible,
    removeRows,
    removeRowsCheckedClick,
    setPageNagetion,
    setShowPages,
    boardModify,
    getPages,
  } = useBoards(LOCAL_STORAGE_ID);

  // 모달
  const onSubmit = (id, cb, close) => async (data) => {
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
      price: expenditureMoney === "" ? "0" : expenditureMoney,
      time: expenditureTime,
      update: true,
    };

    setLoading(true);
    const old_expenditures = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));
    const new_expenditures = old_expenditures.map((el) =>
      el.id === id ? { ...el, ...expenditureData } : el
    );
    // 모달이 바로 닫히지 않도록 지연을 주었다.
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(new_expenditures));
    await new Promise((re) =>
      setTimeout(() => re(alert("완료가 되었습니다.")), 1000)
    );
    // 모달 닫기
    cb(false);
    close.current = true;
    // // 현재 보여질 페이지를 구한다.
    const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    const pages = getPages(pagesinit);
    // // 페이지네이션 and 페이지를 랜더링해준다.
    setPageNagetion(pagesinit);
    setShowPages(pages);
    setLoading(false);
  };

  const text = useMemo(
    () => ({
      date: "지출 날짜",
      price: "지출",
      insertDate: "등록날짜",
      category: "카테고리",
    }),
    []
  );

  return (
    <div>
      <Sort
        text={text}
        currentQuery={currentQuery}
        removeRowIds={removeRowIds}
        removeRows={removeRows}
        isCategory
      />
      <DataTable
        loading={loading}
        datas={showPages}
        visible={isOpacity}
        removeRowsCheckedClick={removeRowsCheckedClick}
        boardModify={boardModify}
        isCategory
      />
      {showPages.length !== 0 && (
        <Pagination
          currentQuery={currentQuery}
          pageGroup={pageNationState.pageGroup}
          lastPageGroup={pageNationState.lastPageGroup}
          lastPage={pageNationState.lastPage}
        />
      )}
      <ListModal
        isVisible={isVisible}
        updateData={updateData}
        setIsVisible={setIsVisible}
        onSubmit={onSubmit}
        isCategory
      />
    </div>
  );
};

export default Expenditure;
