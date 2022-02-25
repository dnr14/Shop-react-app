import { BrowserRouter } from "react-router-dom";
import AuthProvider from "contexts/AuthProvider";
import Routers from "routers/Routers";
import { Layout } from "assets/style/GlobalStyled";
import Header from "components/Header";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routers />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
