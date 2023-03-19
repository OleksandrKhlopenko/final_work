import React from "react";
import ReactDOM from "react-dom/client";
import StateProvider from "./components/WishlistConrext/WishlistContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>
);
