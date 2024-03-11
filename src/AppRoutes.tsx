import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage></HomePage>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};

export default AppRoutes;
