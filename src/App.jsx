import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "container/HeaderContainer";
import InsertContainer from "container/InsertContainer";
import SelectContainer from "container/SelectContainer";
import MemberShipContainer from "container/MemberShipContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />

        <Route path="/" exact render={() => <div>홈</div>} />
        <Route path="/memberShip" component={MemberShipContainer} />
        <Route path="/insert" component={InsertContainer} />
        <Route path="/select" component={SelectContainer} />
      </BrowserRouter>
    </>
  );
}

export default App;
