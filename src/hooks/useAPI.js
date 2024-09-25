import React, { useCallback, useState } from "react";

const useAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const contentTypeImg = "multipart/form-data";
  const contentType = "application/json";

  const executeRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        headers: {
          "content-Type": contentType,
          ...headers,
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      console.log(options);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error.! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setData(result);
      return result;
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);
      setError(error.message || "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback((url, headers) => executeRequest(url, "GET", null, headers), [executeRequest]);
  const post = useCallback((url, body, headers) => executeRequest(url, "POST", body, headers), [executeRequest]);
  const put = useCallback((url, body, headers) => executeRequest(url, "PUT", body, headers), [executeRequest]);
  const del = useCallback((url, headers) => executeRequest(url, "DELETE", null, headers), [executeRequest]);

  return [data, loading, error, get, post, put, del];
};

export default useAPI;
