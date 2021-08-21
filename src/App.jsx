import { BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from "container/HeaderContainer";
import Insert from "components/insert/Insert";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />

        <Route path="/" exact render={() => <div>홈</div>} />
        <Route path="/insert" component={Insert} />
      </BrowserRouter>
    </>
  );
}

export default App;
