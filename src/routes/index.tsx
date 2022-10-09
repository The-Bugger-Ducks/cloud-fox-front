import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import PrivateRoute from "./PrivateRoute";
import PublicRoutes from "./PublicRoutes";

export default function AppRoutes() {
  const { userInfo } = useContext(AuthContext);

  return !userInfo ? <PublicRoutes /> : <PrivateRoute />;
}
