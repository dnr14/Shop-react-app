import axios from "axios";
import Border from "components/boder/Border";
import React, { useCallback, useRef } from "react";

const BorderContainer = () => {
  const idInput = useRef("");
  const passwordInput = useRef(null);
  const editInput = useRef(null);

  const handleBorderSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData();
    // console.log(e.target.file.files[0]);
    // console.log(idInput.current.value);
    // console.log(passwordInput.current.value);
    // console.log(editInput.current.value);

    formData.append("photo", e.target.file.files[0]);
    formData.append("comment", editInput.current.value);
    formData.append("id", idInput.current.value);
    formData.append("password", passwordInput.current.value);

    axios.post("/api/borders/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }, []);

  return (
    <>
      <Border
        handleBorderSubmit={handleBorderSubmit}
        ref={{ idInput, passwordInput, editInput }}
      />
    </>
  );
};

export default BorderContainer;
