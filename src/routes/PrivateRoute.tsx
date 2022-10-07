import { useContext, ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const { userInfo } = useContext(AuthContext);

  return !userInfo ? <Navigate to={props.redirectTo} /> : <>{props.children}</>;
}
