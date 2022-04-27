import { useEffect, useState } from "react";

interface DevComment {
  comment: string;
  _id: string;
}

export function parseData(comment: string): string {
  const parsedData = comment
    .split("//")
    .map((el) => el + "\n")
    .join("//");

  console.log("parsedData:", parsedData);

  return parsedData;
}

export function useFetchComments() {
  const [comments, setComments] = useState<DevComment[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/comments", {
      method: "GET",
      mode: "cors",
    })
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
