import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router";
import { StyledMaxWidth } from "style/Styled";
import { Container } from "style/login/Search.styled";
import IdSearch from "./IdSearch";
import PasswordSearch from "./PasswordSearch";
import NotFount from "components/404/NotFount";
import Loading from "components/common/Loading";
import PopUp from "./PopUp";
import NewPasswordContainer from "containers/NewPasswordContainer";

const Search = ({
  path,
  pathname,
  success,
  error,
  visible,
  setVisible,
  loading,
  handleChange,
  value,
  handleSubmit,
}) => {
  if (success.isSuccess) {
    if (`${path}/id` === pathname) {
      return (
        <div>
          <div>아이디 찾기 결과</div>
          <div>{success.data.id}</div>
          <div>{success.data.email}</div>
        </div>
      );
    } else {
      return <NewPasswordContainer info={success.data} />;
    }
  }

  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <Switch>
            <Route
              path={`${path}/id`}
              render={() => (
                <IdSearch
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  value={value}
                />
              )}
            />

            <Route
              path={`${path}/password`}
              render={() => (
                <PasswordSearch
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  value={value}
                />
              )}
            />
            <Route component={NotFount} />
          </Switch>
          <Loading loading={loading} />
          <PopUp visible={visible} setVisible={setVisible} message={error.message} />
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default Search;
