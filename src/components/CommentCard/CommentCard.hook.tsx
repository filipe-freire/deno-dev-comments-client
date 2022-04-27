import { useEffect, useState } from "react";

interface DevComment {
  comment: string;
  _id: string;
}

export function useFetchComments() {
  const [comments, setComments] = useState<DevComment[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      import.meta.env.PROD
        ? import.meta.env.VITE_SERVER_URL
        : import.meta.env.VITE_LOCAL_SERVER_URL,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data: DevComment[]) => {
        setComments(data);
      })
      .catch((err) => {
        console.error("error fetching data", error);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    comments,
    loading,
    error,
  };
}
