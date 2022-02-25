import { getGrayColor1 } from "assets/style/GlobalStyled";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import { getBoxShadow3 } from "assets/style/GlobalStyled";
import React from "react";
import down from "assets/images/dropDown.svg";

import styled from "styled-components";

const SelectBox = ({ name, value, handleChange, children }) => {
  return (
    <>
      <Date name={name} value={value} onChange={handleChange}>
        {children}
      </Date>
      <DownImgWrapper>
        <img src={down} alt="down" />
      </DownImgWrapper>
    </>
  );
};

const Date = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: 0 none;
  padding: 0 5px;
  position: relative;
  z-index: 3; // select가 위로 올라와야 함
  ${getBoxShadow3}
  ${getGrayColor1}
`;

const DownImgWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 45px;
  height: inherit;
  ${getFlex("center", "center")}
  ${getBackGroundBrandColor1}
 

  img {
    transition: 0.3s;
  }
`;

export default SelectBox;
