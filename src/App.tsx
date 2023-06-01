import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Layout>
      <Toaster />
      <Routes>
        {routes.map((route, index) => <Route key={index} {...route} />)}
      </Routes>

    </Layout>
  );
}

export default App;
