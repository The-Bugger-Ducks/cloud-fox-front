import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import AboutSensors from "../pages/AboutSensors";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/aboutSensors" element={<AboutSensors />} />
      </Routes>
    </BrowserRouter>
  );
}
