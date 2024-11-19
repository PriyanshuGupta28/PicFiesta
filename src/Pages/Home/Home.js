import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import NavLinks from "../../Components/NavLinks/NavLinks";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import { Outlet, useLocation } from "react-router-dom";
const ReactMasonry = React.lazy(() =>
  import("../../Components/ReactMasonry/ReactMasonry")
);

const Home = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);

  const { data, loading, error } = useAxios(
    `https://pixabay.com/api/?key=${pixabayKey}&q=mountain&orientation=horizontal&editors_choice=true$&per_page=20&page=${page}`
  );

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  const heroDetails = {
    title: "Where Every Pixel Tells a Story: Explore, Inspire, Create Wonder",
    description:
      "We Provide Millions of high quality Stocks, Background, Illustrations and Much More.",
    images: [data[11]?.largeImageURL],
  };
  const isHome = location.pathname === "/";
  return (
    <>
      <MyHero heroDetails={heroDetails} />
      <NavLinks />
      {isHome ? (
        <Suspense fallback={<Loader />}>
          <ReactMasonry data={data} loading={loading} error={error} />
        </Suspense>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Home;
