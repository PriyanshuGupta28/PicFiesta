import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleImage from "../../Components/SingleImage/SingleImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Home.css";
import MyHero from "../../Components/MyHero/MyHero";
import NavLinks from "../../Components/NavLinks/NavLinks";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&q=mountain&orientation=horizontal&editors_choice=true$&per_page=20&page=${page}`
      );
      setData((prevData) => [...prevData, ...response?.data?.hits]);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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
  const text = "Radha Krishna";
  const temp = text.split(" ");
  console.log(temp);

  // console.log(temp.join("+"), "kshfgsdfsdf");
  console.log(loading, "loading");

  const random = Math.min(Math.floor(Math.random() * 20) + 1, 200);
  console.log(random);

  return (
    <>
      <MyHero />
      <NavLinks />
      <div className="home-root">
        <div className="masonry-container">
          {loading ? (
            <Loader />
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}
            >
              <Masonry columnsCount={4} gutter={20}>
                {data.map((e) => (
                  <SingleImage key={e?.id} data={e} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
