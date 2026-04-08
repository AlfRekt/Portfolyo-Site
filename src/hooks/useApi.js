import { useState, useCallback } from "react";

function useApi(apiFn) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiFn(...args);
        setData(response.data);
        return { success: true, data: response.data };
      } catch (err) {
        const message = err.response
          ? `${err.response.status} – ${JSON.stringify(err.response.data)}`
          : err.message;

        setError(message);
        return { success: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [apiFn]
  );

  return { execute, data, loading, error };
}

export default useApi;