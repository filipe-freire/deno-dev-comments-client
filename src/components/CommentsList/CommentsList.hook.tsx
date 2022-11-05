import { useEffect, useState } from "react";
import { getCommentsFromBE } from "../../services";
import { DevComment } from "../../types";

export function useFetchComments() {
  const [comments, setComments] = useState<DevComment[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getCommentsFromBE()
      .then((data: DevComment[]) => {
        setComments(data);
      })
      .catch((error) => {
        console.log("Unnable to fetch comments: ", error);
        setError(error);
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
