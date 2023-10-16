/* eslint-disable react/jsx-key */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLayout from "./routes/routes";

import { ToastContainer } from "react-toastify";
import { userRoutes } from "./routes/paths";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="top-right"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            {userRoutes.map((eachComponent) => (
              <Route
                path={eachComponent.path}
                element={eachComponent.component}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
