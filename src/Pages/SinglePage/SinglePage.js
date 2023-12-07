import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const [data, setData] = useState([]);
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
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {data?.map((e) => (
        <img src={e?.largeImageURL} width={"100%"} alt="img" />
      ))}
    </div>
  );
};

export default SinglePage;
