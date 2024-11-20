import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contactus from "../../Pages/Contactus/Contactus";
import Home from "../../Pages/Home/Home";
import Illustrations from "../../Pages/Illustrations/Illustrations";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Photos from "../../Pages/Photos/Photos";
import Signup from "../../Pages/Signup/Signup";
import SinglePage from "../../Pages/SinglePage/SinglePage";
import Vectors from "../../Pages/Vectors/Vectors";
import Videos from "../../Pages/Videos/Videos";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import ExploreByTheme from "../../Pages/ExploreByTheme/ExploreByTheme";
import EditorPics from "../../Pages/EditorPics/EditorPics";
import TrandingThisWeek from "../../Pages/TrendingThisWeek/TrendingThisWeek";

const AllRoutes = () => {
  const location = useLocation();
  const ScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
      // Smoothly scroll to the top of the page whenever the route changes
      restoreScroll(0, 0);
    }, [location]);

    return null;
  };
  return (
    <>
      <ScrollRestoration />
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<Home />}>
          <Route exact path="photos" element={<Photos />} />
          <Route exact path="illustrations" element={<Illustrations />} />
          <Route exact path="vectors" element={<Vectors />} />
          {/* <Route exact path="videos" element={<Videos />} /> */}
        </Route>
        <Route path="/contactus" element={<Contactus />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/all" element={<SearchPage />}>
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="/explore" element={<ExploreByTheme />} />
        <Route path="/editor" element={<EditorPics />} />
        <Route path="/trending" element={<TrandingThisWeek />} />
        {/* Routes for search pages */}
        <Route path="/photos/search" element={<SearchPage />} />
        <Route path="/illustrations/search" element={<SearchPage />} />
        <Route path="/vectors/search" element={<SearchPage />} />
        {/* <Route path="/videos/search" element={<SearchPage />} /> */}
        {/* Routes for single pages */}
        <Route exact path="/all/:id" element={<SinglePage />} />
        <Route exact path="/photos/:id" element={<SinglePage />} />
        <Route exact path="/illustrations/:id" element={<SinglePage />} />
        <Route exact path="/vectors/:id" element={<SinglePage />} />
        {/* <Route exact path="/videos/:id" element={<Videos />} /> */}
        {/* Routes for single pages under search */}
        <Route path="/all/search/:id" element={<SinglePage />} />
        <Route exact path="photos/search/:id" element={<SinglePage />} />
        <Route
          exact
          path="/illustrations/search/:id"
          element={<SinglePage />}
        />
        <Route exact path="/vectors/search/:id" element={<SinglePage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

const restoreScroll = (x = 0, y = 0) => {
  window.scrollTo({
    top: y,
    left: x,
    behavior: "smooth",
  });
};
