// use-fetch-data.js
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseUrl + "/api/test");
        setData(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export { useFetchData };
