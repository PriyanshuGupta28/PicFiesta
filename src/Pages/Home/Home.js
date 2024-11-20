import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import NavLinks from "../../Components/NavLinks/NavLinks";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import { Outlet, useLocation } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";
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
      <div style={{ marginTop: "1rem" }}>
        {isHome ? (
          <>
            <Seo
              title="Picfiesta | Discover Stunning Images and Photos"
              description="Explore a vast collection of high-quality images, illustrations, and vectors on Picfiesta. Your go-to destination for creative inspiration!"
              keywords="Picfiesta, image gallery, free images, photos, illustrations, vectors"
              canonicalUrl="https://www.Picfiesta.com/"
              ogTitle="Picfiesta | Discover Stunning Images"
              ogDescription="Browse Picfiesta's extensive library of creative content, including photos, illustrations, and vectors."
              ogImage="https://www.Picfiesta.com/assets/og-home.png"
            />
            <Suspense fallback={<Loader />}>
              <ReactMasonry data={data} loading={loading} error={error} />
            </Suspense>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};

export default Home;
