import { useState, useEffect } from "react";

// Custom hook for handling HTTP requests
const useHttp = (url, day) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Abort function to stop memory leaks if use moves too fast through the days
    const abortController = new AbortController();
    // Function to fetch data from the backend API
    const fetchData = async () => {      
      try {
        // Increased Efficiency due to reduced memory leaks
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await response.json();
        setData(data[0][day]);
        setIsLoading(false);
      } catch (error) {
        if (!error.name === 'AbortError') {
          setError("Failed to Load Data");
          setIsLoading(false);
        } 
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, day]);

  return { data, isLoading, error };
};

export default useHttp;