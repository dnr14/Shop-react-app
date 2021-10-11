import React, { memo, useState } from "react";
import styled from "styled-components";
import loadingIMG from "images/loading.gif";
import PropTypes from "prop-types";

const StyledLDiv = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: transparent;
  img {
    width: 10%;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <StyledLDiv>
          <img src={loadingIMG} alt="loadingbar" />
        </StyledLDiv>
      )}
    </>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default memo(Loading);
