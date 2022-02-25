import React, { memo } from "react";
import styled from "styled-components";
import loadingImg from "assets/images/loading.gif";
import PropTypes from "prop-types";

const Loading = ({ loading }) => {
  if (!loading) return null;

  return (
    <LoadingWrapper>
      <img src={loadingImg} alt="loadingImg" />
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

const LoadingWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: transparent;
  img {
    width: 5%;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;

export default memo(Loading);
