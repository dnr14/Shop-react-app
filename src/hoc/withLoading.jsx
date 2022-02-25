import Loading from "components/common/Loading";
import React from "react";

const withLoading = Component => {
  return ({ loading, ...rest }) => {
    return (
      <>
        <Loading {...{ loading }} />
        <Component {...rest} />
      </>
    );
  };
};

export default withLoading;
