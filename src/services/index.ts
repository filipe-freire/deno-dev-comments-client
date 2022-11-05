export async function getCommentsFromBE() {
  const res = await fetch(
    import.meta.env.PROD
      ? import.meta.env.VITE_SERVER_URL
      : import.meta.env.VITE_LOCAL_SERVER_URL,
    {
      method: "GET",
      mode: "cors",
    }
  );
  if (res.ok) {
    return res.json();
  }
  throw res;
}
