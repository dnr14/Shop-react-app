import axios from "axios";
import Border from "components/boder/Border";
import React, { useCallback, useEffect, useRef, useState } from "react";

const BorderContainer = () => {
  const idInput = useRef("");
  const passwordInput = useRef(null);
  const editInput = useRef(null);
  const [borders, setBorders] = useState(null);
  const [updateRender, setUpdateRender] = useState(0);

  const handleBorderSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData();
    // console.log(e.target.file.files[0]);
    // console.log(idInput.current.value);
    // console.log(passwordInput.current.value);
    // console.log(editInput.current.value);

    console.log(e.target.man.checked);

    // formData.append("photo", e.target.file.files[0]);
    // formData.append("comment", editInput.current.value);
    // formData.append("id", idInput.current.value);
    // formData.append("password", passwordInput.current.value);

    // axios
    //   .post("/api/borders/", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then(() => setUpdateRender((prev) => prev + 1));
  }, []);

  useEffect(() => {
    console.log("랜더링");
    axios
      .get("/api/borders/")
      .then((response) => {
        setBorders(response.data.borders);
      })
      .catch(console.log);
  }, [updateRender]);

  return (
    <>
      <Border
        handleBorderSubmit={handleBorderSubmit}
        borders={borders}
        ref={{ idInput, passwordInput, editInput }}
      />
    </>
  );
};

export default BorderContainer;
