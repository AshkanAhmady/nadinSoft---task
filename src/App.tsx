import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from 'react-hot-toast';
import ToggleColorMode from "./context/ThemeContext";

function App() {
  return (
    <ToggleColorMode >
      <Layout>
        <Toaster />
        <Routes>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Routes>

      </Layout>
    </ToggleColorMode>
  );
}

export default App;
