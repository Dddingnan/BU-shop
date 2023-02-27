import { useEffect, useState } from "react";
import axios from "axios";

import config from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(config.apiBasePath + url);
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
