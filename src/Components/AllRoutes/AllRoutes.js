import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SinglePage from "../../Pages/SinglePage/SinglePage";
import Home from "../../Pages/Home/Home";
import Contactus from "../../Pages/Contactus/Contactus";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Navbar from "../Navbar/Navbar";
import Photos from "../../Pages/Photos/Photos";
import Illustrations from "../../Pages/Illustrations/Illustrations";
import Vectors from "../../Pages/Vectors/Vectors";
import Videos from "../../Pages/Videos/Videos";
import { AnimatePresence } from "framer-motion";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const AllRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Navbar />
        <Routes location={location} key={location?.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route exact path="/home/:id" element={<SinglePage />} />
          <Route exact path="/photos" element={<Photos />} />
          <Route exact path="/illustrations" element={<Illustrations />} />
          <Route exact path="/vectors" element={<Vectors />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AllRoutes;
