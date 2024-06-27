import { useState } from 'react';
import axios from 'axios';

const useFetch = (url, method = 'GET', initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (bodyData = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url,
        data: bodyData,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch; // Ensure the hook is exported as default
