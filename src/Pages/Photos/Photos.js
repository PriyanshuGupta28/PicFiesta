import React, { Suspense, useEffect, useState } from "react";
import "./Photos.css";
import ReactMasonry from "../../Components/ReactMasonry/ReactMasonry";
import Loader from "../../Components/Loader/Loader";
import useAxios from "../../CustomHooks/useAxios";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import Seo from "../../Components/Seo/Seo";

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

  return (
    <>
      <Seo
        title="Picfiest | Photos - Beautiful Free Photos"
        description="Browse beautiful free photos on Picfiest. Find the perfect image for your project from our diverse collection."
        keywords="free photos, high-quality photos, Picfiest photos, image gallery"
        canonicalUrl="https://www.picfiest.com/photos"
        ogTitle="Photos | Picfiest"
        ogDescription="Explore our curated collection of free photos on Picfiest."
        ogImage="https://www.picfiest.com/assets/og-photos.png"
      />

      <Suspense fallback={<Loader />}>
        <ReactMasonry data={data} loading={loading} error={error} />
      </Suspense>
    </>
  );
};

export default Photos;
