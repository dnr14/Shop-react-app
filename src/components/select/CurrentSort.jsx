import React, { memo } from "react";
import { Row, Col } from "style/Styled";
import { makeUrl } from "utils/urlUtil";
import { StyledDiv, StyledLink } from "style/select/CurrentSort.styled";

const CurrentSort = ({ pathname, currentQuery, columnText }) => {
  return (
    <Row>
      <Col>
        <StyledDiv>
          {Object.keys(currentQuery).map((_key, idx) => {
            if (_key === "page") return null;
            return (
              <div key={idx}>
                {
                  <StyledLink
                    to={`${makeUrl(pathname, currentQuery, { [`${_key}`]: undefined })}`}
                    position={currentQuery[`${_key}`]}
                  >
                    <span>{columnText[`${_key}`]}</span>
                    <span className="img"></span>
                  </StyledLink>
                }
              </div>
            );
          })}
        </StyledDiv>
      </Col>
    </Row>
  );
};

export default memo(CurrentSort);
