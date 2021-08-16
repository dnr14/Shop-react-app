import Header from "components/layout/Header";
import HouseholdledgerInset from "components/insert/HouseholdledgerInset";
import HouseholdledgerSelect from "components/select/HouseholdledgerSelect";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={() => <div>홈</div>} />
        <Route path="/insert" component={HouseholdledgerInset} />
        <Route path="/select" component={HouseholdledgerSelect} />
      </BrowserRouter>
    </>
  );
}

export default App;
