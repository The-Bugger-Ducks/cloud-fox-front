import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";

import 'react-toastify/dist/ReactToastify.css';

import Routes from "./routes";

import theme from "./global/theme";
import "./global/styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
