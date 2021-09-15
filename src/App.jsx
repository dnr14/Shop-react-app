import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "containers/HeaderContainer";
import AuthContextProvider from "contexts/AuthContextProvider";
import Routers from "components/routers/Routers";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderContainer />
          <Routers />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
