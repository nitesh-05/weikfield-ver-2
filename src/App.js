import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom"
import Login from "./pages/pages/Login";
import Dashboard from "./pages/pages/Dashboard";
import Header from "./pages/pages/Header";
import ProductMaster from "./pages/pages/ProductMaster";
import React, { useEffect } from "react";
import DistributorMaster from "./pages/pages/DistributorMaster";
import PlaceOrder from "./pages/pages/PlaceOrder";
import ViewOrder from "./pages/pages/ViewOrder";
import MyProfile from "./pages/pages/MyProfile";

function App() {
  console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);

  console.log("process.env.PUBLIC_URL", window.location.pathname);

  useEffect(() => {
    {
      window.location.pathname == "/"
        ? document.body.classList.add("loginBG")
        : document.body.classList.add(
            "fixed-nav",
            "sticky-footer",
            "sidenav-toggled"
          );
    }
  }, [window.location.pathname]);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <HashRouter> */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            path="/product"
            element={
              <>
                <Header />
                <ProductMaster />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Dashboard />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/distribution"
            element={
              <>
                <Header />
                <DistributorMaster />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/placeorder"
            element={
              <>
                <Header />
                <PlaceOrder />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/vieworder"
            element={
              <>
                <Header />
                <ViewOrder />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/myprofile"
            element={
              <>
                <Header />
                <MyProfile />
              </>
            }
          />
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </>
  );
}

export default App;
