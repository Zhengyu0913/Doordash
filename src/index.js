import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppThemeProvider from "./themes/AppThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </BrowserRouter>
);
