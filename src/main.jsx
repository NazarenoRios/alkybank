import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../firebase/firebase"
import { ThemeProvider } from "@mui/material";
import theme from "./utils/muiTheme/theme";
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
 <ThemeProvider theme={theme}>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
 </ThemeProvider> 
 </AuthProvider>

);
