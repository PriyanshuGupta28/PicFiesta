import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleImage from "../../Components/SingleImage/SingleImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&q=&image_type=all$&per_page=20&page=${page}`
      );
      setData((prevData) => [...prevData, ...response?.data?.hits]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight);

    const windowBottom = windowHeight + scrollY;
    if (windowBottom >= docHeight - 1) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
      <Masonry columnsCount={4} gutter={20}>
        {data.map((e) => (
          <SingleImage key={e?.id} data={e} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Home;
