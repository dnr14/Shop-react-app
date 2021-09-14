import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderContainer from "container/HeaderContainer";
import InsertContainer from "container/InsertContainer";
import SelectContainer from "container/SelectContainer";
import MemberShipContainer from "container/MemberShipContainer";
import LoginCotainer from "container/LoginCotainer";
import LogoutContainer from "container/LogoutContainer";
import AuthContextProvider from "contexts/AuthContextProvider";
import NotFount from "components/404/NotFount";
import PrivateRouter from "hoc/PrivateRouter";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderContainer />
          <Switch>
            <Route path="/memberShip" component={MemberShipContainer} />
            <Route path="/insert" component={InsertContainer} />
            <Route path="/select" component={SelectContainer} />
            <Route path="/login" component={LoginCotainer} />
            <PrivateRouter path="/logout" component={LogoutContainer} exact />
            <Route
              path="/"
              exact
              render={() => {
                console.log(1);
                return <div>홈</div>;
              }}
            />
            <Route component={NotFount} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
