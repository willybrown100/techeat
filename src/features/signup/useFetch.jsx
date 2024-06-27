import { useState } from 'react';
import axios from 'axios';

const useFetch = (url, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchData = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios({
        url,
        method,
        data
      });
      setResponse(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, fetchData };
};

export default useFetch;
