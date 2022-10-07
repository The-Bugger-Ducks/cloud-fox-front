import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import PrivilegedUsers from "../pages/PrivilegedUsers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />

      <Route
        path="/myProfile"
        element={
          <PrivateRoute redirectTo="/login">
            <MyProfile />
          </PrivateRoute>
        }
      />

      <Route
        path="/privileged-users"
        element={
          <PrivateRoute redirectTo="/home">
            <PrivilegedUsers />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
