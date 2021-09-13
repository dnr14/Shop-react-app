import React from "react";
import styled from "styled-components";
import loading from "images/loading.gif";

const StyledLoading = styled.img`
  display: block;
  width: 20%;
  background-color: black;
  background: url(${loading});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLoadingBar = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: transparent;
  img {
    width: 10%;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;

const Loading = () => {
  return (
    <>
      <StyledLoadingBar>
        <img src={loading} alt="loadingbar" />
      </StyledLoadingBar>
    </>
  );
};

export default Loading;
