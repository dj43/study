const { useState } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
};
