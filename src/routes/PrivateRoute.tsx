import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import PrivilegedUsers from "../pages/PrivilegedUsers";

export default function PrivateRoute() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/privileged-users" element={<PrivilegedUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
