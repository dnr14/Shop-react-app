import React from "react";
import { StyledMaxWidth } from "style/Styled";
import PropTypes from "prop-types";
const UserInfo = ({ info }) => {
  return (
    <StyledMaxWidth>
      <main>
        <section>{JSON.stringify(info)}</section>
      </main>
    </StyledMaxWidth>
  );
};

UserInfo.propTypes = {
  info: PropTypes.object,
};

export default UserInfo;
