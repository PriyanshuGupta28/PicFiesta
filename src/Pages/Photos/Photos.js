import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import "./Photos.css";
import NavLinks from "../../Components/NavLinks/NavLinks";
import ReactMasonry from "../../Components/ReactMasonry/ReactMasonry";
import Loader from "../../Components/Loader/Loader";
import useAxios from "../../CustomHooks/useAxios";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";

const Photos = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxios(
    `https://pixabay.com/api/?key=${pixabayKey}&q=iphone+Wallpapers&image_type=photo&editors_choice=true$&per_page=20&page=${page}`
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
    title: "Stunning free stock photos for download",
    description:
      "Over 3.7 million+ royalty-free stock photos shared by our talented community.",
    images: [data[11]?.largeImageURL],
  };
  return (
    <>
      {/* <MyHero heroDetails={heroDetails} /> */}
      {/* <NavLinks /> */}
      <Suspense fallback={<Loader />}>
        <ReactMasonry data={data} loading={loading} error={error} />
      </Suspense>
    </>
  );
};

export default Photos;
