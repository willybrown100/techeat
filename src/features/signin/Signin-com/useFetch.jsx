import { useState, useCallback } from "react";

const useFetch = (url, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (body, isFormData = false) => {
      setLoading(true);
      setError(null);
      try {
        const options = {
          method,
          headers: isFormData ? {} : { "Content-Type": "application/json" },
          body: isFormData ? body : JSON.stringify(body),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();
        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        setError(err.message);
        console.error("Fetch error:", err);
        throw err;
      }
    },
    [url, method]
  );

  return { fetchData, error, loading };
};

export default useFetch;
