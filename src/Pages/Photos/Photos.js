import React, { useEffect, useState } from "react";
import SingleImage from "../../Components/SingleImage/SingleImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

const Photos = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&q=iphone+Wallpapers&image_type=photo&editors_choice=true$&per_page=20&page=${page}`
      );
      setData((prevData) => [...prevData, ...response?.data?.hits]);
    } catch (error) {
      console.error("Error fetching data:", error);
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
        setLoading(true);
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
    <div>
      {" "}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
        <Masonry columnsCount={4} gutter={20}>
          {data.map((e) => (
            <SingleImage key={e?.id} data={e} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Photos;