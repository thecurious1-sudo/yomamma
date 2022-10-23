import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const get = useCallback(async (configs) => {
    // console.log(configs);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(configs.url, {
        params: configs.params ? configs.params : {},
      });
      // console.log(response.data);
      if (
        response.data.joke ||
        (response.data.results && response.data.results.length > 0)
      ) {
        setData(response.data);
      } else setError("No Joke Found!");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  return { data, loading, error, get };
};

export default useHttp;
