import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import "./Vectors.css";
import NavLinks from "../../Components/NavLinks/NavLinks";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
const ReactMasonry = React.lazy(() =>
  import("../../Components/ReactMasonry/ReactMasonry")
);

const Vectors = () => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useAxios(
    `https://pixabay.com/api/?key=${pixabayKey}&q=iphone+Wallpapers&image_type=vector&editors_choice=true$&per_page=20&page=${page}`
  );

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
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
    title: "Stunning free vector art stock images",
    description:
      "Over 140,000+ free vector art images shared by our talented community.",
    images: [data[11]?.largeImageURL],
  };
  return (
    <>
      <MyHero heroDetails={heroDetails} />
      <NavLinks />
      <Suspense fallback={<Loader />}>
        <ReactMasonry data={data} loading={loading} error={error} />
      </Suspense>
    </>
  );
};

export default Vectors;
