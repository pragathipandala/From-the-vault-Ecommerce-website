import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Shop from "./pages/Shop.jsx";
import Sale from "./pages/Sale.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import { AppProvider } from "./context/productContext.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sale" element={<Sale />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
