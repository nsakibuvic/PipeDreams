import { useState, useEffect } from "react";

// Custom hook for handling HTTP requests
const useHttp = (url, day) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await response.json();
        setData(data[0][day]);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to Load Data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, day]);

  return { data, isLoading, error };
};

export default useHttp;