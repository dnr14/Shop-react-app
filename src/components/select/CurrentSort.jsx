import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled, { css } from "styled-components";
import { makeUrl } from "util/urlUtil";
import up from "images/up.svg";
import down from "images/down.svg";

const CurrentSortDiv = styled.div`
  display: flex;
  min-height: 31.6px;
  gap: 10px;
`;

const CustomLink = styled(Link)`
  color: #fff;
  background-color: rgba(46, 204, 113, 1);
  border-radius: 5px;
  display: inline-block;
  box-shadow: 3px 3px 5px rgb(127 140 141 / 50%);
  span {
    padding: 5px 10px;
    display: inline-block;
  }
  .img {
    width: 25px;
    height: 18px;
    background-size: cover;
    ${({ position }) => {
      return position === "asc"
        ? css`
            background-image: url(${up});
          `
        : css`
            background-image: url(${down});
          `;
    }}
  }
`;

const CurrentSort = ({ pathname, currentQuery, text }) => {
  return (
    <Row>
      <Col>
        <CurrentSortDiv>
          {Object.keys(currentQuery).map((_key, idx) => {
            if (_key === "page") return null;
            return (
              <div key={idx}>
                {
                  <CustomLink to={`${makeUrl(pathname, currentQuery, { [`${_key}`]: undefined })}`} position={currentQuery[`${_key}`]}>
                    <span>{text[`${_key}`]}</span>
                    <span className="img"></span>
                  </CustomLink>
                }
              </div>
            );
          })}
        </CurrentSortDiv>
      </Col>
    </Row>
  );
};

export default memo(CurrentSort);
