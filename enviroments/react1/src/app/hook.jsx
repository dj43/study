"use client";

import "./styles.css";
import useFetch from "./template/customHook.js/fetchHook";

export default function Hook() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>{data.body}</div>
    </>
  );
}
