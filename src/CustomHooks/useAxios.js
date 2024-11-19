import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData([]);
      setResponse(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController(); // For request cancellation
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const res = await axios.get(url, { signal: controller.signal });
        setData((prevData) => [...prevData, ...(res?.data?.hits || [])]); // Accumulate data
        setResponse(res);
        console.log(res, "useAxiosResponse");
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(err);
          console.log(err, "useAxiosError");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel Axios request
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error, response };
};

export default useAxios;
