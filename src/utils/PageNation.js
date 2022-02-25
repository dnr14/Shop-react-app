const PAGENATION_NUMBER_COUNT = 5; //페이지네이션 번호 개수
const PAGE_SHOW_COUNT = 5; // 한 페이지에 보여줄 개수

export function getCurrentPage(pageNationState, currentQuery) {
  const { data } = pageNationState;
  const lastPage = Math.ceil(data.length / PAGE_SHOW_COUNT);
  const currnetPage = Number(currentQuery.page);
  if (data.length === 0) return [];
  if (lastPage >= currnetPage) {
    pageNationState.pageGroup = Math.ceil(currnetPage / PAGENATION_NUMBER_COUNT);
    const startPage = (currnetPage - 1) * PAGE_SHOW_COUNT;
    const endPage = startPage + PAGE_SHOW_COUNT;
    const showData = getDataSliceByIndex(data, startPage, endPage);
    return showData;
  }

  /*
    유저가 url에 lastPage를 넘은 숫자를 입력 시 1페이지로 고정
  */
  if (lastPage < currnetPage) {
    pageNationState.pageGroup = 1;
    const startPage = 0;
    const endPage = startPage + PAGE_SHOW_COUNT;
    const showData = getDataSliceByIndex(data, startPage, endPage);
    return showData;
  }
}

const getDataSliceByIndex = (data, startPage, endPage) => {
  return data
    .reverse()
    .slice(startPage, endPage)
    .map((item, idx) => ({ ...item, idx: startPage + 1 + idx }));
};

// 페이지네이션 번호 생성
export function getPageNationNumbers(pageGroup, lastPage, lastPageGroup) {
  const start = (pageGroup - 1) * PAGENATION_NUMBER_COUNT + 1;
  const nextPage = pageGroup * PAGENATION_NUMBER_COUNT + 1;
  const prevPage = (pageGroup - 1) * PAGENATION_NUMBER_COUNT;

  const pageNationCountArray =
    pageGroup === lastPageGroup
      ? Array.from({ length: lastPage + 1 - start }, (_, i) => (pageGroup - 1) * PAGENATION_NUMBER_COUNT + 1 + i)
      : Array.from({ length: PAGENATION_NUMBER_COUNT }, (_, i) => (pageGroup - 1) * PAGENATION_NUMBER_COUNT + 1 + i);

  return [nextPage, prevPage, pageNationCountArray];
}

export function getDataSort(data, sort) {
  if (data.length === 0) return [];
  const { date, price, insertDate, category } = sort;

  const [first] = data;
  let { idx } = first;
  let resultArray = data;

  if (category === undefined && date === undefined && price === undefined && insertDate === undefined) return data;

  if (price !== undefined) {
    resultArray =
      price === "desc"
        ? data.sort((a, b) => (Number(a.price) <= Number(b.price) ? 1 : -1))
        : data.sort((a, b) => (Number(a.price) >= Number(b.price) ? 1 : -1));
  }

  if (date !== undefined) {
    resultArray =
      date === "desc"
        ? data.sort((a, b) => (a.time <= b.time ? 1 : -1))
        : data.sort((a, b) => (a.time >= b.time ? 1 : -1));
  }

  if (insertDate !== undefined) {
    resultArray =
      insertDate === "desc"
        ? data.sort((a, b) => (a.insertTime <= b.insertTime ? 1 : -1))
        : data.sort((a, b) => (a.insertTime >= b.insertTime ? 1 : -1));
  }

  if (category !== undefined) {
    resultArray =
      category === "desc"
        ? data.sort((a, b) => (a.category <= b.category ? 1 : -1))
        : data.sort((a, b) => (a.category >= b.category ? 1 : -1));
  }

  return resultArray.map(item => ({ ...item, idx: idx++ }));
}

const getPageNationInitialData = getId => {
  const data = JSON.parse(localStorage.getItem(getId));

  if (data === null) {
    return {
      data: [],
      lastPageGroup: 1,
      lastPage: 1,
      pageGroup: 1,
    };
  }

  return {
    data,
    lastPageGroup: Math.ceil(data.length / (PAGENATION_NUMBER_COUNT * PAGE_SHOW_COUNT)),
    lastPage: Math.ceil(data.length / PAGE_SHOW_COUNT),
    pageGroup: 1,
  };
};

export default getPageNationInitialData;
