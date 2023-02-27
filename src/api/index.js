import { useEffect, useState } from "react";
import axios from "axios";

import config from "../config";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(config.apiBasePath + "/api/test");
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
