import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const activeRequest = useRef([]);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      const httpAbortController = new AbortController();
      activeRequest.current.push(httpAbortController);
      try {
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: headers,
          signal: httpAbortController.signal,
        });

        const data = await response.json();
        activeRequest.current = activeRequest.current.filter(
          (requestController) => requestController !== httpAbortController
        );
        // if response code is 4xx or 5xx error will be thrown
        if (!response.ok) {
          throw new Error(data.message);
        }
        setLoading(false);
        return data;
      } catch (err) {
        setError(err.message || "Something went wrong, please try again.");
        setLoading(false);
        throw err;
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeRequest.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []);
  return { loading, error, request, clearError };
};
