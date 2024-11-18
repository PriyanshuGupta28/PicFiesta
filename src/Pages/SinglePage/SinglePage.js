import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fecthData = async () => {
    try {
      const data = await axios.get(
        `https://pixabay.com/api/?key=41123393-d488d28859f6869a5072a3240&id=${id}`
      );
      setData(data?.data?.hits);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    fecthData();
  }, []);
  return (
    <div>
      {data?.map((e) => (
        <img
          src={e?.largeImageURL}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      ))}
    </div>
  );
};

export default SinglePage;
