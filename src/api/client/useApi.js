import { useEffect, useState } from "react";
import api from ".";

export default function useApi({
  baseURL = "http://localhost:5500",
  endpoint,
  options,
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function action({ payload } = {}) {
    setLoading(true);
    api
      .request({
        url: endpoint,
        baseURL: baseURL,
        method: options.method,
        data: payload,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (options.method.toLowerCase() == "get") action();
  }, []);

  return { data, loading, error, action };
}
