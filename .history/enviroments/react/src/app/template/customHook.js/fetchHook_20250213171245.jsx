const { useState, useEffect } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw error("api error");
        }
        const result = await response.json();
        setData(result);
      } catch {
        setError(error);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, [url]);
};
