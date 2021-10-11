

import { useCallback, useEffect, useMemo, useState } from 'react';
import queryString from "query-string";
import getPageNationInitialData, { getCurrentPage, getDataSort } from 'utils/PageNation';
import { useHistory } from 'react-router';

// localStorage에 저장되어있는 item id 값
//LOCAL_STORAGE_ID 지출,수입 
const useBoards = (LOCAL_STORAGE_ID) => {
  const { location } = useHistory();
  const { search } = location;
  const [updateData, setUpdateData] = useState({});
  const [removeRowIds, setRemoveRowIds] = useState([]);
  const [showPages, setShowPages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);
  const [pageNationState, setPageNagetion] = useState(
    getPageNationInitialData(LOCAL_STORAGE_ID)
  );

  //쿼리스트링
  const currentQuery = useMemo(() => queryString.parse(search), [search]);

  //쿼리스트링 page를 가지고 현재 보여줄 rows 계산 및 정렬 방법 계산
  const getPages = useCallback(
    (pagesInit) => {
      if (currentQuery.page === undefined) currentQuery.page = 1;
      let currentPages = getCurrentPage(pagesInit, currentQuery);
      currentPages = getDataSort(currentPages, currentQuery);
      return currentPages;
    },
    [currentQuery]
  );

  // 체크박스에 클릭한 row를 상태 값으로 저장
  const removeRowsCheckedClick = useCallback(
    (id) => (e) => {
      setRemoveRowIds((prevIds) =>
        e.target.checked
          ? [...new Set([...prevIds, id])]
          : prevIds.filter((prevId) => prevId !== id)
      );
    },
    []
  );

  // 업데이트 모달창 열기
  const boardModify = useCallback(
    (id) => (e) => {
      e.preventDefault();
      const data = showPages.find((el) => el.id === id);
      setUpdateData(data);
      setIsVisible(true);
    },
    [showPages, setUpdateData]
  );

  // 체크박스에 체크된 rows 삭제
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
  }, [removeRowIds, LOCAL_STORAGE_ID, getPages]);


  useEffect(() => {
    const pagesinit = getPageNationInitialData(LOCAL_STORAGE_ID);
    const pages = getPages(pagesinit);
    setShowPages(pages);
  }, [pageNationState, currentQuery, getPages, LOCAL_STORAGE_ID]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await new Promise((re) => setTimeout(() => re(), 500));
      setIsLoading(false);
      setIsOpacity(true);
    })();
  }, []);

  return {
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
  };
};

export default useBoards;