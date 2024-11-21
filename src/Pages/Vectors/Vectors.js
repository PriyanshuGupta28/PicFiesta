import React, { Suspense, useEffect, useState } from "react";
import "./Vectors.css";
import useAxios from "../../CustomHooks/useAxios";
import Loader from "../../Components/Loader/Loader";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";
import Seo from "../../Components/Seo/Seo";
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

  return (
    <>
      <Seo
        title="Picfiesta | Vectors  - Free Vector Graphics"
        description="Find free vector graphics on Picfiesta. Ideal for graphic design and digital projects."
        keywords="free vectors, vector graphics, Picfiesta vectors, design assets"
        canonicalUrl="https://www.Picfiesta.com/vectors"
        ogTitle="Vectors | Picfiesta"
        ogDescription="Explore free vector graphics for your creative needs on Picfiesta."
        ogImage="https://www.Picfiesta.com/assets/og-vectors.png"
      />

      <Suspense fallback={<Loader />}>
        <ReactMasonry data={data} loading={loading} error={error} />
      </Suspense>
    </>
  );
};

export default Vectors;
