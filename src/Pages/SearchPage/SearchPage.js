import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useAxios from "../../CustomHooks/useAxios";
import ReactMasonry from "../../Components/ReactMasonry/ReactMasonry";
import { Flex, Pagination } from "antd";
import { pixabayKey } from "../../Utility/Utils/utilsFunctions";

const SearchPage = () => {
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const [page, setPage] = useState(1);
  const [queryUrl, setQueryUrl] = useState("");

  // Format query string for the API
  const modefiledQuery = searchQuery.split(" ").join("+");

  // Update query URL whenever the searchQuery or page changes
  useEffect(() => {
    setQueryUrl(
      `https://pixabay.com/api/?key=${pixabayKey}&q=${modefiledQuery}&page=${page}&per_page=20`
    );
  }, [modefiledQuery, page]);

  // Fetch data using the dynamically updated query URL
  const { data, loading, error, response } = useAxios(queryUrl);

  // Calculate total pages based on API response
  const totalPages = response?.data?.totalHits
    ? Math.ceil(response.data.totalHits / 20)
    : 0;

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {/* Display fetched data in a masonry layout */}
      <ReactMasonry data={data} loading={loading} error={error} />

      {/* Pagination component */}
      {/* <Pagination
        current={page}
        total={response?.data?.totalHits || 0}
        pageSize={20}
        onChange={handlePageChange}
        style={{ marginTop: "1rem", textAlign: "center" }}
      /> */}

      {/* Display total results */}
      {/* <Flex style={{ marginTop: "1rem", justifyContent: "center" }}>
        Total: {response?.data?.totalHits || 0}
      </Flex> */}
    </div>
  );
};

export default SearchPage;