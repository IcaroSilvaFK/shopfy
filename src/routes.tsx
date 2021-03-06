import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export const RoutesApplication: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
