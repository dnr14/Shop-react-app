import axios from "axios";
import Borders from "components/boders/Borders";
import React, { useCallback, useEffect, useState } from "react";

const BordersContainer = () => {
  const [borders, setBorders] = useState(null);
  const [updateRender, setUpdateRender] = useState(0);

  const handleBorderSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", e.target.file.files[0]);
    formData.append("comment", e.target.edit.value);
    formData.append("id", e.target.id.value);
    formData.append("password", e.target.password.value);
    formData.append("gender", e.target.man.checked === true ? 0 : 1);

    axios
      .post("/api/borders/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setBorders((prev) => [response.data.result, ...prev]);
        // setUpdateRender((prev) => prev + 1);
      });
  }, []);

  useEffect(() => {
    async function preLoading(borders) {
      borders.forEach((border) => {
        if (border.fileName) {
          const img = new Image();
          img.src = border.fileName;
        }
      });
    }

    axios
      .get("/api/borders/")
      .then((response) => {
        (async () => {
          await preLoading(response.data.borders);
          setBorders(response.data.borders);
        })();
      })
      .catch(console.log);
  }, [updateRender]);

  console.log(borders);

  return (
    <>
      <Borders handleBorderSubmit={handleBorderSubmit} borders={borders} />
    </>
  );
};

export default BordersContainer;
