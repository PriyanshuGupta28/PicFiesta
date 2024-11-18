import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import "./Illustrations.css";
import NavLinks from "../../Components/NavLinks/NavLinks";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";

const ReactMasonry = React.lazy(() =>
  import("../../Components/ReactMasonry/ReactMasonry")
);

const Illustrations = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error, response } = useAxios(
    `https://pixabay.com/api/?key=${pixabayKey}&q=iphone+Wallpapers&image_type=illustration&editors_choice=true$&per_page=20&page=${page}`
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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  const heroDetails = {
    title: "Free illustrations for download & inspiration",
    description:
      "Over 630,000+ beautiful free illustrations shared by our talented community.",
    images: [data[11]?.largeImageURL],
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ReactMasonry
          key={"Illustrations"}
          data={data}
          loading={loading}
          error={error}
        />
      </Suspense>
    </>
  );
};

export default Illustrations;
