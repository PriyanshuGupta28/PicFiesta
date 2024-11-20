import React, { Suspense, useEffect, useState } from "react";
import MyHero from "../../Components/MyHero/MyHero";
import "./Illustrations.css";
import NavLinks from "../../Components/NavLinks/NavLinks";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import Seo from "../../Components/Seo/Seo";

const ReactMasonry = React.lazy(() =>
  import("../../Components/ReactMasonry/ReactMasonry")
);

const Illustrations = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxios(
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
  return (
    <>
      <Seo
        title="Picfiesta | Illustrations - Creative Artwork"
        description="Discover a variety of creative illustrations on Picfiesta. Perfect for design inspiration and projects."
        keywords="illustrations, creative artwork, Picfiesta illustrations, graphic design"
        canonicalUrl="https://www.Picfiesta.com/illustrations"
        ogTitle="Illustrations | Picfiesta"
        ogDescription="Browse creative illustrations and graphic artwork on Picfiesta."
        ogImage="https://www.Picfiesta.com/assets/og-illustrations.png"
      />

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
