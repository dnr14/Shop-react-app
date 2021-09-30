import axios from "axios";
import Borders from "components/boders/Borders";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as bordersApi from "axios/api/borders";

const BordersContainer = () => {
  const [borders, setBorders] = useState(null);
  const observerRef = useRef();

  const preImgLoading = useCallback(
    async (borders) =>
      borders.forEach((border) => border.fileName && (new Image().src = border.fileName)),
    []
  );

  const observer = (node) => {
    if (node === null || node === undefined) return;
    if (observerRef.current) observerRef.current.disconnect();
    let timer;
    const observerCallback = ([entry], observer) => {
      // 첫 랜더 시 borders는 null이다.
      // 첫 랜더 후 api 통해 borders를 가져오기 전에 타겟에 접근 했다면 실행 x
      if (entry.isIntersecting && borders !== null) {
        //서버 호출을 컨트롤 하기 위해 디바운스
        if (timer) clearTimeout(timer);
        const hasMore = async () => {
          const { borderId } = borders[borders.length - 1];
          const response = await axios.get(`/api/borders/${borderId}`);
          await preImgLoading(response.data.borders);
          // 게시판 끝까지 왔으면 구독 해제 더 이상 서버에 요청 x
          if (response.data.borders.length === 0) return observer.unobserve(entry.target);
          setBorders((prev) => [...prev, ...response.data.borders]);
        };
        timer = setTimeout(hasMore, 1000);
      }
    };
    observerRef.current = new IntersectionObserver(observerCallback);
    observerRef.current.observe(node);
  };

  const handleBorderSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", e.target.file.files[0]);
      formData.append("comment", e.target.edit.value);
      formData.append("id", e.target.id.value);
      formData.append("password", e.target.password.value);
      formData.append("gender", e.target.man.checked === true ? 0 : 1);
      const response = await bordersApi.createBorder(formData);
      setBorders((prev) => [response.data.result, ...prev]);
    } catch (error) {
      throw error;
    }
  }, []);

  // 첫 마운팅 후 통신
  useEffect(() => {
    (async () => {
      try {
        const response = await bordersApi.getBorders();
        await preImgLoading(response.data.borders);
        setBorders(response.data.borders);
      } catch (error) {
        throw error;
      }
    })();
  }, [preImgLoading]);

  console.log(borders);

  return (
    <>
      <Borders
        handleBorderSubmit={handleBorderSubmit}
        observer={observer}
        borders={borders}
      />
    </>
  );
};

export default BordersContainer;
