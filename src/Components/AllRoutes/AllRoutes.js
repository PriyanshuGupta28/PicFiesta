import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePage from "../../Pages/SinglePage/SinglePage";
import Home from "../../Pages/Home/Home";
import Contactus from "../../Pages/Contactus/Contactus";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route exact path="/home/:id" element={<SinglePage />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
