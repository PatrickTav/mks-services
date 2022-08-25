import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC");
        const dataProduct = await response.json();
        setData(dataProduct.products);
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, [url]);

  return {data, error, loading};
};

export default useFetch;
