import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Dashboard from "./pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
    </Routes>
  );
}
