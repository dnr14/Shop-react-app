import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "container/HeaderContainer";
import InsertContainer from "container/InsertContainer";
import SelectContainer from "components/select/Select";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />

        <Route path="/" exact render={() => <div>홈</div>} />
        <Route path="/insert" component={InsertContainer} />
        <Route path="/select" component={SelectContainer} />
      </BrowserRouter>
    </>
  );
}

export default App;
